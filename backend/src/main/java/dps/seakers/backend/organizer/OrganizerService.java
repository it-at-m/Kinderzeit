package dps.seakers.backend.organizer;

import lombok.extern.slf4j.Slf4j;
import dps.seakers.backend.organizer.Organizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
@Service
@Slf4j
public class OrganizerService {

    private final OrganizerRepository organizerRepository;

    @Autowired
    public OrganizerService(OrganizerRepository organizerRepository) {
        this.organizerRepository = organizerRepository;
    }
    /**
     * @param none
     * @return all organizers
     * @throws EntityNotFoundException Exception when retrieve element
     */
    public Iterable<Organizer> getAll() {
        return organizerRepository.findAll();
    }
       /**
     * @param id element ID
     * @return element
     * @throws EntityNotFoundException Exception when retrieve element
     */
    public Organizer get(UUID id) {
        return organizerRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(String.format("Can not find the entity organizer (%s = %s).", "id", id)));
    }

    /**
     * create element.
     *
     * @param item element to create
     * @return element after creation
     * //     * @throws CreateWithIdException   
     * @throws EntityNotFoundException 
     */
    public Organizer create(Organizer item) {
        return save(item);
    }

    /**
     * create \ update elements
     *
     * @param item element to save
     * @return element after save
     */
    protected Organizer save(Organizer item) {
        return organizerRepository.save(item);
    }

    /**
     * delete element
     *
     * @param id element ID
     * @throws EntityNotFoundException Exception when retrieve entity
     */
    public void delete(UUID id) {
        Organizer entity = organizerRepository.findById(id)
                                  .orElseThrow(() -> new EntityNotFoundException(String.format("Can not find the entity organizer (%s = %s).", "id", id)));
        organizerRepository.delete(entity);
    }
    /**
     * update element
     *
     * @param id   element identifier
     * @param item element to update
     * @return element after update
     * @throws EntityNotFoundException Exception when retrieve entity
     */
    public Organizer update(UUID id, Organizer item) {
        if (item.getId() == null) {
            throw new RuntimeException("Can not update entity, entity without ID.");
        } else if (!id.equals(item.getId())) {
            throw new RuntimeException(String.format("Can not update entity, the resource ID (%s) not match the objet ID (%s).", id, item.getId()));
        }
        return save(item);
    }

}