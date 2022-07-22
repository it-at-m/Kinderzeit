import React, { ReactNode } from 'react'
import SelectLibrary, {
    components as SelectLibraryComponents,
    OptionProps,
    PlaceholderProps,
} from 'react-select'
import { DropdownIndicatorProps } from 'react-select/dist/declarations/src/components/indicators'

// PRIMARY_COLOR = '#CEF2E5'

export type SelectOptionProps = {
    // The identifier of the option
    value: any
    // Arbitrary ReactNode displayed inside the option
    label: ReactNode
}

export type SelectProps = {
    // Options to render for the user
    options: readonly SelectOptionProps[]
    // Text to display inside the input
    placeholderText: string
    // Toggle multi mode
    allowMultiSelect: boolean
    // Return array of selected values
    onChange: (selectedValues: any[]) => void
    containerStyling?: object
    // Styling for the select container
    className?: string
    onUserTyping?: (userInput: string) => void
}

function CustomClearIndicator() {
    return null
}

function CustomDropdownIndicator(props: DropdownIndicatorProps) {
    return (
        <SelectLibraryComponents.DropdownIndicator {...props}>
            <svg
                width="20"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.8"
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="black"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </SelectLibraryComponents.DropdownIndicator>
    )
}

function CustomSelectOption(props: OptionProps) {
    return (
        <div
            className={`px-8 h-12 ${
                props.isSelected ? 'bg-[#CEF2E5]' : 'bg-white'
            } hover:bg-[#CEF2E5] flex w-full cursor-pointer`}
        >
            <div
                className="flex-1 h-full flex items-center text-[16px] tracking-wider py-4"
                onClick={() => props.selectOption(props.data)}
            >
                {props.children}
            </div>
            {props.isSelected && (
                <div
                    className="flex items-center"
                    onClick={() => {
                        if (Array.isArray(props.selectProps.value))
                            props.setValue(
                                (
                                    props.selectProps
                                        .value as SelectOptionProps[]
                                ).filter(
                                    (o) =>
                                        o.value !==
                                        (props.data as SelectOptionProps).value
                                ),
                                'deselect-option'
                            )
                        else props.setValue(null, 'deselect-option')
                    }}
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 13L13 1M1 1L13 13"
                            stroke="#111827"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    )
}

function CustomPlaceholder(props: PlaceholderProps) {
    return (
        <SelectLibraryComponents.Placeholder {...props}>
            <div
                className={`${
                    props.getValue().length !== 0 &&
                    'my-1 border-b-[#417764] border-b-4'
                }`}
            >
                {props.children}
            </div>
        </SelectLibraryComponents.Placeholder>
    )
}

export default function Select({
    options,
    placeholderText,
    allowMultiSelect,
    onChange,
    className,
    onUserTyping,
    containerStyling,
}: SelectProps) {
    return (
        <SelectLibrary
            components={{
                Option: CustomSelectOption,
                ClearIndicator: CustomClearIndicator,
                DropdownIndicator: CustomDropdownIndicator,
                Placeholder: CustomPlaceholder,
            }}
            hideSelectedOptions={false}
            placeholder={placeholderText}
            options={options}
            onChange={(e: SelectOptionProps[] | SelectOptionProps) =>
                Array.isArray(e)
                    ? onChange(e.map((o) => o.value))
                    : onChange(e ? [e.value] : [])
            }
            // theme={(theme) => ({
            //     ...theme,
            //     colors: {
            //         ...theme.colors,
            //         primary: '#CEF2E5',
            //     },
            // })}
            isMulti={allowMultiSelect}
            closeMenuOnSelect={!allowMultiSelect}
            onInputChange={onUserTyping}
            controlShouldRenderValue={false}
            className={className || ''}
            styles={{
                control: (defaultStyling) => ({
                    ...defaultStyling,
                    ...containerStyling,
                    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
                    border: 0,
                }),
                menu: (defaultStyling) => ({
                    ...defaultStyling,
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }),
                input: (defaultStyling) => ({
                    ...defaultStyling,
                    padding: '12px 16px 12px 24px',
                    borderColor: 'pink',
                    caretColor: 'transparent',
                }),
                placeholder: (defaultStyling) => ({
                    ...defaultStyling,
                    letterSpacing: '0.05em',
                    color: '#1F2937',
                    maxWidth: 'max-content',
                }),
                indicatorSeparator: () => ({
                    visibility: 'hidden',
                }),
            }}
        />
    )
}
