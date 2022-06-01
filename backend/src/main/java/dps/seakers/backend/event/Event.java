package dps.seakers.backend.event;

import dps.seakers.backend.interest.Interest;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Event")
@Data
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer minAge;

    @Column(nullable = false)
    private Integer maxAge;

    @Column(nullable = false)
    private Boolean cancelled;

    @ManyToMany(mappedBy="taggedEvents")
    public List<Interest> tags;
}
