INSERT INTO event
    (id,
    minAge ,
    maxAge ,
    cancelled,
    organizerId ,
    address ,
    zipCode ,
    maxAdultsPerFamily ,
    maxChildrenPerFamily ,
    price,
    placesAvailable ,
    startDate ,
    endDate)
VALUES
    (4,
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
    '15.6.2022',
    '16.6.2022')
ON CONFLICT DO NOTHING;