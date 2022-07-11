DROP TABLE event;
CREATE TABLE event (
  id uuid not null,
  event_name varchar NOT NULL,
  event_description varchar NOT NULL,
  min_age int NOT NULL,
  max_age int NOT NULL,
  event_address varchar NOT NULL,
  booking_URL varchar NOT NULL,
  image_URL varchar,
  map_URL varchar,
  area varchar NOT NULL,
  cancelled boolean NOT NULL,
  organizer_id uuid NOT NULL,
  zip_code varchar NOT NULL,
  begin_date date NOT NULL,
  end_date date NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  places_available int NOT NULL,
  price float NOT NULL,
  email_contact varchar NOT NULL,
  take_with varchar,
  accompany_needed boolean NOT NULL,
  holiday_period varchar,
  PRIMARY KEY (id)
);
CREATE TABLE Organizer(
  id uuid not null,
  organizer_name varchar UNIQUE NOT NULL,
  organizer_description varchar NOT NULL,
  email_contact varchar UNIQUE NOT NULL,
  mobile_phone varchar UNIQUE,
  website_URL varchar,
  PRIMARY KEY ("id")
);

ALTER TABLE Event ADD FOREIGN KEY ("organizer_id") REFERENCES Organizer ("id");