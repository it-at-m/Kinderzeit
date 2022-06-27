package dps.seakers.backend.event;

//import dps.seakers.backend.interest.Interest;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.time.LocalDateTime; 
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name="Event")
@Getter
@Setter
public class Event {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private Integer minAge;

    @Column(nullable = false)
    private Integer maxAge;

    @Column(nullable = false)
    private Boolean cancelled;

    /*@ManyToMany(mappedBy="taggedEvents")
    public List<Interest> tags;*/

    @Column(nullable = false)
    private String adress;

    @Column(nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private Integer maxAdultsPerFamily;

    @Column(nullable = false)
    private Integer maxChildrenPerFamily;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private Integer placesAvailable;

    @Column(nullable = false)
    private LocalDateTime startDate;

    @Column(nullable = false)
    private LocalDateTime endDate;

   /*@OneToOne
    @Column(name="organizerId", nullable = false)
    private Organization organization;*/

}
