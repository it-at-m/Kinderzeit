CREATE TABLE "Event" (
  "id" int UNIQUE NOT NULL,
  "minAge" int NOT NULL,
  "maxAge" int NOT NULL,
  "cancelled" boolean NOT NULL,
  "organizerId" int NOT NULL,
  "address" varchar NOT NULL,
  "zipCode" varchar NOT NULL,
  "maxAdultsPerFamily" int,
  "maxChildrenPerFamily" int NOT NULL,
  "price" float NOT NULL,
  "placesAvailable" int NOT NULL,
  "startDate" datetime NOT NULL,
  "endDate" datetime NOT NULL,
  PRIMARY KEY ("id")
);