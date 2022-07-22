export type EventDataModel = {
    id: string
    eventName: string
    eventDescription: string
    minAge: number
    maxAge: number
    eventAddress: string
    booking_URL: string
    image_URL: string
    map_URL: string
    area: string
    cancelled: boolean
    organizer_id: number
    zip_code: string
    beginDate: string
    endDate: string
    start_time: string
    end_time: string
    places_available: number
    price: number
    email_contact: string
    take_with: string
    accompany_needed: boolean
    holiday_period: string
}

export type OrganizerDataModel = {
    id: string
    organizer_name: string
    organizer_description: string
    email_contact: string
    mobile_phone: string
    website_URL: string
}

export type RecommendationWizardState = {
    area: string
}

export const EMPTY_RECC_STATE: RecommendationWizardState = {
    area: '',
}
