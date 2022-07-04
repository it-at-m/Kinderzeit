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

    @Column()
    private String image_URL;

    @Column(nullable = false)
    private String event_name;

    @Column(nullable = false)
    private String event_description;

    @Column(nullable = false)
    private String start_time;

    @Column(nullable = false)
    private Integer min_age;

    @Column(nullable = false)
    private Integer max_age;

    @Column(nullable = false)
    private Boolean cancelled;

    /*@ManyToMany(mappedBy="taggedEvents")
    public List<Interest> tags;*/
    @Column(nullable = false)
    private Integer organizer_id;

    @Column(nullable = false)
    private String event_address;

    @Column(nullable = false)
    private String zip_code;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private Integer max_adults_per_family;

    @Column(nullable = false)
    private Integer max_children_per_family;

    @Column(nullable = false)
    private Integer places_available;

    @Column(nullable = false)
    private LocalDateTime begin_date;

    @Column(nullable = false)
    private LocalDateTime end_date;

    @Column(nullable = false)
    private String email_contact;


   /*@OneToOne
    @Column(name="organizerId", nullable = false)
    private Organization organization;*/

}