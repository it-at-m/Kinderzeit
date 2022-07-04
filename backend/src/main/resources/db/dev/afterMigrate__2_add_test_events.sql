INSERT INTO Event
    (
    id,
    image_URL,
    event_name,
    event_description,
    start_time,
    min_age,
    max_age,
    cancelled,
    organizer_id,
    event_address,
    zip_code,
    price,
    max_adults_per_family,
    max_children_per_family,
    places_available,
    begin_date,
    end_date,
    email_contact)
VALUES
    (  1,
        "https://images.thrillophilia.com/image/upload/s--90xz2mik--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/334/417/original/1595836118_shutterstock_664589182.jpg.jpg?1595836118",
        "Day Adventure at sea",
        "Discover over 3.000 creatures in more than 33 displays.",
        "9:00",
        3,
        14,
        false,
        2,
        "Sea Life, Moosach",
        "80335",
        16.00,
        2,
        2,
        10,
        2022-06-03,
        2022-06-04,
        "info@kunstlabor.org"
    );