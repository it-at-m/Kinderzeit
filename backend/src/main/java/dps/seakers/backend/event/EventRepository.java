package dps.seakers.backend.event;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

public interface EventRepository extends JpaRepository<Event, UUID>, PagingAndSortingRepository<Event, UUID>,JpaSpecificationExecutor<Event>{
    public List<Event> findByMaxAgeGreaterThanEqual(int max_age);
    public List<Event> findByMinAgeLessThanEqual(int min_age);

}
