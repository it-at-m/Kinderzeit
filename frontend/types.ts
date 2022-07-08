type EventDataModel = {
    id: string
    event_name: string
    event_description: string
    min_age: number
    max_age: number
    event_address: string
    booking_URL: string
    image_URL: string
    map_URL: string
    area: string
    cancelled: boolean
    organizer_id: number
    zip_code: string
    begin_date: string
    end_date: string
    start_time: string
    end_time: string
    places_available: number
    price: number
    email_contact: string
    take_with: string
    accompany_needed: boolean
    holiday_period: string
}

export default EventDataModel
