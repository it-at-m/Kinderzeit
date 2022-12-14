DROP TABLE event;
CREATE TABLE event (
  id uuid not null,
  image_URL varchar,
  event_name varchar NOT NULL,
  event_description varchar NOT NULL,
  start_time varchar NOT NULL,
  min_age int NOT NULL,
  max_age int NOT NULL,
  cancelled boolean NOT NULL,
  organizer_id int NOT NULL,
  event_address varchar NOT NULL,
  zip_code varchar NOT NULL,
  price float NOT NULL,
  max_adults_per_family int,
  max_children_per_family int NOT NULL,
  places_available int NOT NULL,
  begin_date date NOT NULL,
  end_date date NOT NULL,
  email_contact varchar NOT NULL,
  PRIMARY KEY (id)
);