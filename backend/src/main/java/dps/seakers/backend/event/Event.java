package dps.seakers.backend.event;

//import dps.seakers.backend.interest.Interest;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.time.LocalDateTime; 
import java.time.LocalTime; 
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name="Event")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String event_name;

    @Column(nullable = false)
    private String event_description;

    @Column(nullable = false)
    private Integer min_age;

    @Column(nullable = false)
    private Integer max_age;

    @Column(nullable = false)
    private String event_address;


    @Column(nullable = false)
    private String booking_URL;

    @Column()
    private String image_URL;

    @Column()
    private String map_URL;

    @Column(nullable = false)
    private String area;


    @Column(nullable = false)
    private Boolean cancelled;

    /*@ManyToMany(mappedBy="taggedEvents")
    public List<Interest> tags;*/
    @Column(nullable = false)
    private Integer organizer_id;

    @Column(nullable = false)
    private String zip_code;

    @Column(nullable = false)
    private LocalDateTime begin_date;

    @Column(nullable = false)
    private LocalDateTime end_date;

    @Column(nullable = false)
    private LocalTime start_time;

    @Column(nullable = false)
    private LocalTime end_time;

    @Column(nullable = false)
    private Integer places_available;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private String email_contact;

    @Column()
    private String take_with;

    @Column(nullable = false)
    private Boolean accompany_needed;

    @Column()
    private String holiday_period;

   /*@OneToOne
    @Column(name="organizerId", nullable = false)
    private Organization organization;*/

}