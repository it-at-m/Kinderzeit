package dps.seakers.backend.interest;

import dps.seakers.backend.child.Child;
import dps.seakers.backend.event.Event;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Interest")

public class Interest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String interestName;

    @ManyToMany(mappedBy="interests")
    public List<Child> interestedChildren;

    @ManyToMany(mappedBy="tags")
    public List<Event> taggedEvents;
}
