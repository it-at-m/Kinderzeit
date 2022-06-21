package dps.seakers.backend.event;

import dps.seakers.backend.interest.Interest;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name="Event")
@Getter
@Setter
public class EventModel {
    @Id
    @GeneratedValue
    private UUID id;
    
    @Column(nullable = false)
    private Integer minAge;

    @Column(nullable = false)
    private Integer maxAge;

    @Column(nullable = false)
    private Boolean cancelled;

    @ManyToMany(mappedBy="taggedEvents")
    public List<Interest> tags;
}
