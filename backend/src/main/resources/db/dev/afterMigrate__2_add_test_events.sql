INSERT INTO Event
    (id,
    minAge,
    maxAge,
    cancelled,
    organizerId,
    address ,
    zipCode ,
    maxAdultsPerFamily ,
    maxChildrenPerFamily ,
    price,
    placesAvailable ,
    startDate ,
    endDate)
VALUES
    (2,
    8,
    17,
    false,
    1,
    'Dachauer Str. 90 80335 München',
    '80335',
    2,
    2,
    25.00,
    5,
    '2022-06-15',
    '2022-06-16')
ON CONFLICT DO NOTHING;