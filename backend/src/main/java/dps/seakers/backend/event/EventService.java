package dps.seakers.backend.event;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpHeaders;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
@Service
@Slf4j
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
    /**
     * @param none
     * @return all events
     * @throws EntityNotFoundException Exception when retrieve element
     */
    public Iterable<Event> getAll() {
        return eventRepository.findAll();
    }


   /**
     * get elements using Criteria.
     *
     * @param spec *
     * @return elements
     */
    public List<Event> getSorted(Specification<Event> spec, Sort sort) {
        return eventRepository.findAll(spec, sort);
    }

       /**
     * @param id element ID
     * @return element
     * @throws EntityNotFoundException Exception when retrieve element
     */
    public Event get(UUID id) {
        return eventRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format("Can not find the entity event (%s = %s).", "id", id)));
    }

    /**
     * create element.
     *
     * @param item element to create
     * @return element after creation
     * //     * @throws CreateWithIdException   
     * @throws EntityNotFoundException 
     */
    public Event create(Event item) {
        return save(item);
    }

    /**
     * create \ update elements
     *
     * @param item element to save
     * @return element after save
     */
    protected Event save(Event item) {
        return eventRepository.save(item);
    }

    /**
     * delete element
     *
     * @param id element ID
     * @throws EntityNotFoundException Exception when retrieve entity
     */
    public void delete(UUID id) {
        Event entity = eventRepository.findById(id)
                                  .orElseThrow(() -> new EntityNotFoundException(String.format("Can not find the entity event (%s = %s).", "id", id)));
        eventRepository.delete(entity);
    }
    /**
     * update element
     *
     * @param id   element identifier
     * @param item element to update
     * @return element after update
     * @throws EntityNotFoundException Exception when retrieve entity
     */
    public Event update(UUID id, Event item) {
        if (item.getId() == null) {
            throw new RuntimeException("Can not update entity, entity without ID.");
        } else if (!id.equals(item.getId())) {
            throw new RuntimeException(String.format("Can not update entity, the resource ID (%s) not match the objet ID (%s).", id, item.getId()));
        }
        return save(item);
    }

}