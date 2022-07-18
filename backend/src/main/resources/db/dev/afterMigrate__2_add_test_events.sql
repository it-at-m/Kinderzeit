INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    (   '1c2bb1da-da94-4ced-a43b-a54c218a8c9a',
        'Münchner Umwelt-Zentrum im Ökologischen Bildungszentrum',
        ' ',
        'mail@oebz.de',
        '089 93 94 89 71',
        'https://www.oebz.de/'
    )
ON CONFLICT DO NOTHING;
INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    ( '7fe06383-8163-42af-b497-9afed1594675',
        'FabLab München e.V.',
        ' ',
        'info@fablab-muenchen.de',
        '089 21535502',
        'https://www.fablab-muenchen.de/'
    )
ON CONFLICT DO NOTHING;
INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    ( 'dd6e8b6f-9947-42fb-81f0-caa8c9ee9d1d',
        'KJT Zeugnerhof',
        ' ',
        'zeugnerhof@kjr-m.de',
        '089 4313642',
        'https://www.kjr-m.de/'
    )
ON CONFLICT DO NOTHING;
INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    ( '4d4d1274-9b88-4eae-ac7d-4ce40cf97009',
        'Feierwerk e.V.',
        ' ',
        'suedpolstation@feierwerk.de',
        '08972488133',
        'https://www.feierwerk.de/'
    )
ON CONFLICT DO NOTHING;
INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    (
        'bfa8c147-e6b1-45c0-9986-cd25bb8728a4',
        'Internationale Jugendbibliothek',
        ' ',
        'programm@ijb.de',
        '089 89121149',
        'https://www.ijb.de/home'
    ) ON CONFLICT DO NOTHING;
INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    ( 'f2e6bbc3-ea2f-4180-b1a8-21bb990fe33a',
        'Stadtjugendamt München',
        ' ',
        'ferienangebote.soz@muenchen.de',
        '089 23333833',
        'https://stadt.muenchen.de/infos/jugendamt.html'
    )
ON CONFLICT DO NOTHING;
INSERT INTO Organizer
    (id,
    organizer_name,
    organizer_description,
    email_contact,
    mobile_phone,
    website_URL)
VALUES
    ( '4776be13-4ce1-4ce1-8e3f-bad87fd692a0',
        'Kinder- und Jugendtreff ZeitFrei',
        ' ',
        'zeitfrei@kjr-m.de',
        '089 6704850',
        'https://zeitfrei-muenchen.de/'  )
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
        'Was wäre unsere Welt ohne Farben, und warum ist es um uns herum so bunt? Wir spüren den Farben in der Natur nach und schauen uns farbenprächtige Tiere und Pflanzen genauer an. Ist für alle Lebewesen rot gleich rot? Aus dem Farbtopf der Natur stellen wir unsere eigene Farbpalette zusammen und experimentieren in der Farbwerkstatt mit Färbepflanzen und verschiedenen Erdfarben. Mit selbsthergestellten Farben entstehen Bilder, bunte Holzperlen und so manche andere Überraschung. Gemeinsam kochen wir uns ein \"buntes\" Mittagessen.',
        8,
        12,
        'Englschalkinger Str. 166',
        'https://www.oebz.de/default.asp?Menue=2&Terminrubrik=23&Veranstaltung=6113',
        'https://dayswithgrey.com/wp-content/uploads/2020/05/img_5ed2dd27aa101.jpg',
        'https://www.google.com/maps/place/%C3%96kologisches+Bildungszentrum+M%C3%BCnchen/@48.1520814,11.6314254,16.4z/data=!4m5!3m4!1s0x479e753e18f509ed:0x4f264c00c76859de!8m2!3d48.1527445!4d11.6348286',
        'Bogenhausen',
        false,
        '1c2bb1da-da94-4ced-a43b-a54c218a8c9a',
        '81927',
        '2022-08-01T00:00:00',
        '2022-08-01T00:00:00',
        '09:00:00',
        '16:00:00',
        12,
        32.0,
        'mail@oebz.de',
        'Bitte wettergerechte Kleidung, festes Schuhwerk (Gummistiefel) und eine kleine Brotzeit für die Pause mitbringen (Mittagessen ist inkl.)',
        false,
        'Sommerferien'
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
    ('29c0cd32-dec8-4e97-9286-5801b0ed23a1',
        'FabLabKids: 3DCraft-modelliere und drucke Minecraft in 3D',
        'In diesem Workshop werden wir beeindruckende Bauwerke für Minecraft planen und einfach realisieren. Dabei wirst Du lernen wie man 3D-modelliert, wie ein 3D-Drucker funktioniert und Du wirst Dein Minecraft-Bauwerk ausdrucken können.Wir bringen Minecraft ins nächste Level!In jedem Kurs werden die Kinder ca. 30-45 Minuten gemeinsam Minecraft spielen, auf unserem Server wird im Kreativ-Modus gespielt und alle Monster sind ausgeschaltet. Wir nutzen die “Minecraft Java Edition” für PC. Die Welten aus jedem Workshop werden nach dem Kurs auf unserer Webseite zum Download bereitgestellt und nach Absprache kann die Welt den Kindern auf unserem Online-Server zugänglich gemacht werden..',
        8,
        14,
        'Gollierstr. 70',
        'https://www.eventbrite.de/e/fablabkids-3dcraft-modelliere-und-drucke-minecraft-in-3d-tickets-344916974957',
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F142766073%2F120138891355%2F1%2Foriginal.jpg?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=bc6965b64a85cc04384a246fcdaae147',
        'https://www.google.com/maps/place/FabLab+M%C3%BCnchen+e.V./@48.1370495,11.5343774,19.09z/data=!4m5!3m4!1s0x479e760f93b46125:0x931f73f7a21fa575!8m2!3d48.1370104!4d11.5340946',
        'Schwanthalerhöhe',
        false,
        '7fe06383-8163-42af-b497-9afed1594675',
        '80339',
        '2022-08-02',
        '2022-08-02',
        '10:00:00',
        '15:00:00',
        6,
        45.0,
        'info@fablab-muenchen.de',
        ' ',
        false,
        'Sommerferien'
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
    ( '83d3d2ee-cf31-44be-97bc-6914872124a0',
    'Mini-München mit dem Zeugnerhof',
        'Zusammen mit vielen anderen Münchner Kindern und Jugendlichen betreibt ihr eure eigene Stadt: Ihr könnt arbeiten und studieren, spazieren gehen oder mit der Bahn fahren, bauen, einkaufen, ins Kino gehen, Geschäfte er-öffnen, Zeitungsartikel schreiben, Politik machen und vieles mehr!Wenn es euch gefällt, könnt ihr auch an anderen Tagen selbstständig zu den unterschiedlichen Orten von Mini-München in der Stadt fahren.',
        7,
        15,
        'Josephsburgstr. 10',
        'https://zeugnerhof.de/',
        'https://zeugnerhof.de/wp-content/uploads/Home-Angebote.jpg',
        'https://www.google.com/maps/place/Kinder-+und+Jugendtreff+Zeugnerhof+(Kreisjugendring+M%C3%BCnchen-Stadt)/@48.1274017,11.6225234,14.71z/data=!4m5!3m4!1s0x479ddff5a0e32f13:0xfbb6fe2d1868c27!8m2!3d48.1279333!4d11.6273526',
        'Berg am Laim',
        false,
        'dd6e8b6f-9947-42fb-81f0-caa8c9ee9d1d',
        '81673',
        '2022-08-03',
        '2022-08-03',
        '10:00:00',
        '17:30:00',
        10,
        6.0,
        'zeugnerhof@kjr-m.de',
        'Brotzeit und Getränke mitnehmen',
        false,
        'Sommerferien' )
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
    ( 'e6d99b40-6ed1-4635-ba12-818d676c89b4', 
    'Buch auf, Film ab!',
        'Jeder hat seine eigenen Vorstellungen zu Büchern, Geschichten und deren Figuren. Umso spannender, die eigenen Ideen in kleinen Filmen lebendig werden zu lassen! Mit den techni-schen Möglichkeiten eines Tablet-PCs und Bildschneideprogrammes sowie der Lust am Theaterspielen werden wir zusammen mit einfachen Mitteln eigene kleine Filme machen. Vorkenntnisse oder technische Ausstattung braucht ihr nicht; nur eure Neugierde und Fantasie sind gefragt! Wir werden unsere kreative Energie auf ganz unterschiedliche Themen loslassen. Ob verfilmte Gedichte, Grusel- oder selbsterfundene Geschichten: Im Bücherschloss wartet in jedem Winkel eine Idee darauf, von euch entdeckt und verfilmt zu werden!.',
        8,
        12,
        'Schloss Blutenburg / Seldweg, 15',
        'https://www.ferien-muenchen.de/veranstaltung.php?idV=3969',
        'https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX26187445.jpg',
        'https://www.google.com/maps/place/International+Youth+Library/@48.1633283,11.454842,17z/data=!4m9!1m2!2m1!1sInternationale+Jugendbibliothek+Schloss+Blutenburg+%2F+Seldweg+15+81247+M%C3%BCnchen+-+Pasing+-+Obermenzing!3m5!1s0x479e77f5b3c64b07:0x211589efa93ea1ce!8m2!3d48.1635144!4d11.4569703!15sCmVJbnRlcm5hdGlvbmFsZSBKdWdlbmRiaWJsaW90aGVrIFNjaGxvc3MgQmx1dGVuYnVyZyAvIFNlbGR3ZWcgMTUgODEyNDcgTcO8bmNoZW4gLSBQYXNpbmcgLSBPYmVybWVuemluZ1phIl9pbnRlcm5hdGlvbmFsZSBqdWdlbmRiaWJsaW90aGVrIHNjaGxvc3MgYmx1dGVuYnVyZyBzZWxkd2VnIDE1IDgxMjQ3IG3DvG5jaGVuIHBhc2luZyBvYmVybWVuemluZ5IBB2xpYnJhcnmaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkpjMkZmVDBaQkVBRQ',
        'Pasing-Obermenzing',
        false,
        'bfa8c147-e6b1-45c0-9986-cd25bb8728a4',
        '81247',
        '2022-08-10',
        '2022-08-10',
        '10:00:00',
        '12:30:00',
        12,
        0,
        'programm@ijb.de',
        '.',
        false,
        'Sommerferien'
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
    ( '1481e2f4-30a5-4373-b3f2-7e16fdf8b5aa',
        'KICKBOXEN-WORKSHOP',
        'In diesem Workshop wollen die Pastinaken euch ein paar einfache Übungen aus dem Kickboxen zeigen. Ihr lernt dabei wie ihr euch bewegen könnt und merkt, dass auch schon eine kleine Gewichtsverlagerung oder eine bestimmte Drehung ganz viel Unterschied machen kann und sich ganz anders anfühlt. Wir sprechen darüber, wie wir uns gemeinsam so abstimmen und aufeinander eingehen können, dass wir unsere Kraft zeigen dürfen und uns dabei aber nicht gegenseitig verletzen.',
        8,
        12,
        'Gustav-Heinemann-Ring 19',
        'https://www.ferien-muenchen.de/veranstaltung.php?idV=4004',
        'https://www.ferien-muenchen.de/uploads/veranstaltungen/v4004/02082022_feierwerk_suedpolstation_kreaktiv_werkstatt_workshop_boxen_credit_pastinaken.jpeg',
        'https://www.google.com/maps/place/Feierwerk+S%C3%BCdpolstation/@48.0852462,11.6290161,13.53z/data=!4m5!3m4!1s0x479de0811fcbf323:0x4748899d472a5635!8m2!3d48.0854638!4d11.6376656',
        'Ramersdorf und Perlach',
        false,
        '4d4d1274-9b88-4eae-ac7d-4ce40cf97009',
        '81739',
        '2022-08-02',
        '2022-08-02',
        '10:00:00',
        '18:00:00',
        8,
        25.0,
        'suedpolstation@feierwerk.de',
        'Ihr braucht keine Vorkenntnisse und keine Ausrüstung, aber bringt bitte bequeme Sportkleidung und Turnschuhe mit.',
        false,
        'Sommerferien'
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
    (   '8941ea4e-a60c-4fd5-b167-a1975ac001ea',
        'Escape Room',
        'Im Zeugnerhof lernt ihr euch bei einer Schnitzeljagd durchs Haus kennen und findet heraus, wie ihr als Team Rätsel lösen könnt. Dann wird es ernst! Wir fahren zum Escape Game und ihr müsst als Team knifflige Aufgaben lösen. Stück für Stück tüftelt ihr euch wieder aus dem Raum zum glorreichen Sieg hinaus. Sie können auf Nachfrage das Anmeldeformular auch per Mail bekommen und den Teilnehmendenbetrag auf folgendes Bankkonto überweisen:Kontoinhaber: KJT ZeugnerhofIBAN: DE40701500000000438762BIC: SSKMDEMMXXXBitte nennen Sie als Verwendungszweck Aktion und Datum und informieren Sie uns telefonisch oder per Mail, wenn Sie den Betrag überwiesen haben.Für eine feste Anmeldung muss der Geldbetrag bis spätestens Freitag vor der Aktion auf unserem Bankkonto eingegangen sein.',
        10,
        14,
        'Josephsburgstr. 10',
        'https://www.ferien-muenchen.de/veranstaltung.php?idV=3897',
        'https://thumbs.dreamstime.com/b/parents-their-children-satisfied-visit-escape-room-parents-their-children-satisfied-visit-224426113.jpg',
        'https://www.google.com/maps?q=Kinder-+und+Jugendtreff+Zeugnerhof+Josephsburgstr.+10+81673+M%C3%BCnchen+-+Berg+am+Laim+Deutschland&rlz=1C5CHFA_enPL988PL989&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjKy_GR_eP4AhUIgv0HHam9AjYQ_AUoAXoECAEQAw',
        'Berg am Laim',
        false,
        'dd6e8b6f-9947-42fb-81f0-caa8c9ee9d1d',
        '81673',
        '2022-08-10',
        '2022-08-10',
        '11:00:00',
        '16:00:00',
        12,
        18,
        'zeugnerhof@kjr-m.de',
        'Bitte genügend Brotzeit und Getränke mitnehmen!',
        false,
        'Sommerferien'
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
    ( 'd467ba5d-879a-44ab-a651-13895c8f09c4', 
    'Erlebnistour durch die Klamm-Bus ',
        'Es erwartet Dich ein einmaliges Naturschauspiel! Wohin Du schaust – wilde Wasserfälle, Stromschnellen und Gumpen. Auf einer eisernen Brücke in Bayerns schönstem Naturdenkmal bekommst Du faszinierende Ausblicke aus fast 70 Metern Höhe.Ganztägig: Partnachklamm-700 Meter Weg durch die Klamm- Teilnahme nur bei Schwindelfreiheit möglich',
        10,
        14,
        'Arnulfstraße 21',
        'https://www.ferien-muenchen.de/veranstaltung.php?idV=3847',
        'https://www.munich.travel/var/ger_muc/storage/images/_aliases/image_gallery_main/9/9/7/8/1678799-1-ger-DE/hop-on-hop-off-express-grey-line-stadtrundfahrten-odeonsplatz-foto-sightseeing-munich-com-3000.jpg',
        'https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB+%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD%D0%B0/@48.142276,11.5476593,17z/data=!4m9!1m2!2m1!1sZentraler+Omnibus+Bahnhof+(ZOB),!3m5!1s0x479e7600b4a01453:0x316a8592ea327bab!8m2!3d48.142276!4d11.549848!15sCiBaZW50cmFsZXIgT21uaWJ1cyBCYWhuaG9mIChaT0IpLFofIh16ZW50cmFsZXIgb21uaWJ1cyBiYWhuaG9mIHpvYpIBC2J1c19zdGF0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJKWjJSTWRVUm5FQUU',
        'Ludwigsvorstadt-Isarvorstadt',
        false,
        'f2e6bbc3-ea2f-4180-b1a8-21bb990fe33a',
        '80335',
        '2022-08-08',
        '2022-08-08',
        '08:30:00',
        '17:30:00',
        0,
        8,
        'ferienangebote.soz@muenchen.de',
        'Bitte wetterfeste Kleidung, feste Schuhe und Regenschutz mitbringen',
        false,
        'Sommerferien')
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
    ( '29eb691b-54f7-41e6-8ffc-32ecbe0d09d1',
        'Wasserrodeln-Stadtreisen 1 ',
        'Du wolltest schon immer mal in weniger als einer Minute 173 m in die Tiefe rutschen und Dich danach zum Entspannen im großen Schwimmbecken im Strudel treiben lassen oder Ballspiele machen? Dann komm mit und rutsche, was das Zeug hält.www.fzp-mammendorf.deGanztägig: Freibad Mammendorf-173 m lange Super-Wasserrutsche- Strömungskanal und Wasserpilz im Nichtschwimmer*innenbecken- Große Liegewiese mit diversen Spielmöglichkeiten-Wir gehen nicht in den angrenzenden BadeseeJe nach den aktuellen Corona-Bestimmungen wochenweise (fünf Tage am Stück) oder tageweise buchbar-Infos hierzu vor dem Verkaufsstart auf www.muenchen.de/eintaegige-erlebnisreisen.',
        7,
        9,
        'Karl-Stützel-Platz, Nähe Hauptbahnhof',
        'https://www.muenchenticket.de/tickets/event/px9xr7qkpi7f/Sommerferien-2022-Eintaegige-Erlebnisreisen-Stadtreisen',
        'https://www.brunner-hof.de/wAssets/img/bayerischer-wald/ausflugsziele/4-zu-3/sommerrodelbahn-st.-englmar-bobbahn.jpg',
        'https://www.google.com/maps/place/%D0%9A%D0%B0%D1%80%D0%BB-%D0%A8%D1%82%D1%8E%D1%82%D1%86%D0%B5%D0%BB%D1%8C-%D0%9F%D0%BB%D0%B0%D1%86/@48.1423119,11.5532562,15z/data=!4m5!3m4!1s0x479e75fa3f76ca99:0xe0dbb786fc3164e5!8m2!3d48.1422979!4d11.5619895',
        'Maxvorstadt',
        false,
        'f2e6bbc3-ea2f-4180-b1a8-21bb990fe33a',
        '80333',
        '2022-08-24',
        '2022-08-24',
        '08:15:00',
        '17:00:00',
        1,
        8,
        'ferienangebote.soz@muenchen.de',
        'Badekleidung, Handtuch und Sonnencreme nicht vergessen',
        false,
        'Sommerferien'
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
    ( '328e00a2-7306-4a10-a785-c574ff365e05',
    'Rafting auf der Loisach (Sommerferien 2022)',
        'Verbringt mit uns einen unvergesslichen Tag beim (Wasser) Raften auf der Loisach. Zunächst fahren wir gemeinsam vom KJT ZeitFrei mit dem Zug nach Farchant. Auf großen Schlauchbooten geht es anschließend von einer Anlegestelle in Farchant nach Eschenlohe (Nähe Garmisch Partenkirchen). Auf der Fahrt erwartet euch nicht nur eine wunderschöne naturbelassene Landschaft, sondern auch viel Spaß, Abenteuer und spritzige Wildwasserpassagen.Aufgrund der aktuellen Covid-19 Lage gelten die Hygieneschutzbestimmungen, welche zu diesem Zeitpunkt vom Gesetzgeber und dem Träger, dem KJR München-Stadt, in Kraft sind. Bitte beachten Sie dies sowie etwaige kurzfristige Änderungen in Programm und Organisation, die sich daraus ergeben können..',
        8,
        14,
        'Kurt-Eisner-Str. 28',
        'https://zeitfrei-muenchen.de/wp-content/uploads/Tagesausfluege-und-Veranstaltungen-im-Sommer-2022.pdf',
        'https://checkyeti.imgix.net/images/prod/products/13299/raft-rental-in-farchant-loisach-bavariaraft-hero.jpg',
        'https://www.google.com/maps/place/Kurt-Eisner-Stra%C3%9Fe+28,+81735+M%C3%BCnchen/@48.1059059,11.6523632,17z/data=!3m1!4b1!4m5!3m4!1s0x479de072c65f5431:0xaad2372c79c4fdf3!8m2!3d48.1059059!4d11.6523632',
        'Ramersdorf-Perlach',
        false,
        '4776be13-4ce1-4ce1-8e3f-bad87fd692a0',
        '81735',
        '2022-08-12',
        '2022-08-12',
        '08:15:00',
        '16:30:00',
        15,
        15,
        'zeitfrei@kjr-m.de',
        'Badensachen mit Handtuch, warme Wechselkleidung, Sonnenschutz, ausreichend Getranke und Brotzeit, Mund- und Nasenbedeckung.',
        false,
        'Sommerferien'
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
    ( '79735c6a-c218-4349-8477-6c95eb6e66b1',
    'Tierisch, tierisch-Bus 1',
        'Wie kann man eigentlich einen afrikanischen Elefanten von einem asiatischen unterscheiden? Haben alle Zebras die gleichen Streifenmuster? Können Seehunde unter Wasser schlafen? Das und mehr erfährst Du heute im Zoo Augsburg und kannst viele Tiere hautnah erleben.Ganztägig: Zoo Augsburg- Löwen, Leoparden, Bären und viele weitere Tiere- Führung durch den Zoo- Abenteuerspielplatz- Streichelgehege mit Kaninchen, Minipony und Zwergesele nach den aktuellen Corona-Bestimmungen wochenweise (fünf Tage am Stück) oder tageweise buchbar-Infos hierzu vor dem Verkaufsstart auf www.muenchen.de/eintaegige-erlebnisreisen.',
        5,
        8,
        'Arnulfstraße 21',
        'https://www.muenchenticket.de/tickets/event/pneiblprvowj/Sommerferien-2022-Eintaegige-Erlebnisreisen-Busausfluege',
        'https://www.stadtwerke-muenster.de/fileadmin/presse/pressemeldungen/2019/0514_Foto_Ladestation_Zoo.jpg',
        'https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB+%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD%D0%B0/@48.14229,11.5411147,15z/data=!3m1!4b1!4m5!3m4!1s0x479e7600b4a01453:0x316a8592ea327bab!8m2!3d48.142276!4d11.549848',
        'Ludwigsvorstadt-Isarvorstadt',
        false,
        'f2e6bbc3-ea2f-4180-b1a8-21bb990fe33a',
        '80335',
        '2022-08-17',
        '2022-08-17',
        '09:00:00',
        '17:30:00',
        0,
        8,
        'ferienangebote.soz@muenchen.de',
        ' ',
        false,
        'Sommerferien'
    )
ON CONFLICT DO NOTHING;