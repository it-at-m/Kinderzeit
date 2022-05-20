FROM gradle:7.3.3-jdk17 as builder

WORKDIR /service

COPY . .
RUN gradle --no-daemon --no-watch-fs build

COPY --from=builder /service/build/libs/*.jar backend.jar

CMD [ "java", "-jar", "backend.jar"]