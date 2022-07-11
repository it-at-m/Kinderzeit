import React from 'react'
import { useEffect, useState } from 'react'

import TomSelect from 'tom-select'
import { TomInput } from 'tom-select/dist/types/types'

export default function Select({
    id,
    multiple,
    items,
    onSelect,
    className,
}: {
    multiple: boolean
    items: { id: string; val: string }[]
    onSelect: (id: string) => any
    className: string
    id: string
}) {
    const selectRef = React.createRef<HTMLSelectElement>()
    // eslint-disable-next-line no-unused-vars
    const [libraryObject, setLibraryObject] = useState(null)

    useEffect(() => {
        if (selectRef)
            setLibraryObject(new TomSelect(selectRef.current as TomInput, {}))
    }, [selectRef])

    return <select ref={selectRef} id={id}></select>
}
