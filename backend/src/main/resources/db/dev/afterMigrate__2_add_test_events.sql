INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    (  'abcdde5a-dd0b-4e98-b05e-51b2e3a9e66d',
        'Münchner Umwelt-Zentrum im Ökologischen Bildungszentrum',
        ' ',
        'mail@oebz.de',
        '089 93 94 89 71',
        'https://www.oebz.de/'
    )
ON CONFLICT DO NOTHING;

INSERT INTO Event
    (id,
    event_name,
    event_description,
    min_age,
    max_age,
    event_address,
    booking_URL,
    image_URL,
    map_URL,
    area,
    cancelled,
    organizer_id,
    zip_code,
    begin_date,
    end_date,
    start_time,
    end_time,
    places_available,
    price,
    email_contact,
    take_with,
    accompany_needed,
    holiday_period)
VALUES
    ( 'bcaede5a-dd0b-4e98-b05e-51b2e3a9e66d',
        'Aus dem Farbtopf der Natur',
        'Was wäre unsere Welt ohne Farben, und warum ist es um uns herum so bunt? Wir spüren den Farben in der Natur nach und schauen uns farbenprächtige Tiere und Pflanzen genauer an. Ist für alle Lebewesen rot gleich rot? Aus dem Farbtopf der Natur stellen wir unsere eigene Farbpalette zusammen und experimentieren in der Farbwerkstatt mit Färbepflanzen und verschiedenen Erdfarben. Mit selbsthergestellten Farben entstehen Bilder, bunte Holzperlen und so manche andere Überraschung. Gemeinsam kochen wir uns ein "buntes" Mittagessen.',
        '8',
        '12',
        'Englschalkinger Str. 166',
        'https://www.oebz.de/default.asp?Menue=2&Terminrubrik=23&Veranstaltung=6113',
        'https://drive.google.com/drive/u/1/folders/1pYHosa_bYa0zjRZl7BfB53dQ9TlqkZo1',
        'https://www.google.com/maps/place/%C3%96kologisches+Bildungszentrum+M%C3%BCnchen/@48.1520814,11.6314254,16.4z/data=!4m5!3m4!1s0x479e753e18f509ed:0x4f264c00c76859de!8m2!3d48.1527445!4d11.6348286',
        'Bogenhausen',
        'false',
        'abcdde5a-dd0b-4e98-b05e-51b2e3a9e66d',
        '81927',
        '2022-08-01',
        '2022-08-01',
        '09:00',
        '16:00',
        '12',
        '32',
        'mail@oebz.de',
        'Bitte wettergerechte Kleidung, festes Schuhwerk (Gummistiefel) und eine kleine Brotzeit für die Pause mitbringen (Mittagessen ist inkl.)',
        'false',
        'Sommerferien'
    )
ON CONFLICT DO NOTHING;
