package dps.seakers.backend.organizer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

public interface OrganizerRepository extends JpaRepository<Organizer, UUID>{

}
