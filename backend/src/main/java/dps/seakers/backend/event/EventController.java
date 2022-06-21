package dps.seakers.backend.event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
public class EventController {

    private EventRepository eventRepository;

    @Autowired
    public EventController(EventRepository eventRespository) {
        this.eventRepository = eventRespository;
    }

    @GetMapping("/api/event/all")
    Iterable<EventModel> all() {
        System.out.println("Testing logging to console");
        return eventRepository.findAll();
    }

    @GetMapping("/api/event/{id}")
    EventModel userById(@PathVariable UUID id) {
        return eventRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND));
    }

    @PostMapping("/api/event/save")
    EventModel save(@RequestBody EventModel event) {
        return eventRepository.save(event);
    }

}