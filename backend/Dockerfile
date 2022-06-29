FROM gradle AS builder

WORKDIR /service

COPY . .
RUN gradle --no-daemon --no-watch-fs build

CMD [ "java", "-jar", "/service/build/libs/*.jar"]

FROM amazoncorretto

COPY --from=builder /service/build/libs/*.jar backend.jar

CMD [ "java", "-jar", "backend.jar"]