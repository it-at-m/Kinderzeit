package dps.seakers.backend.event;

import dps.seakers.backend.organizer.Organizer;
import lombok.Data;
import javax.persistence.*;
import java.util.List;
import java.sql.Date; 
import java.sql.Time; 
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
    private String eventName;

    @Column(nullable = false)
    private String eventDescription;

    @Column(nullable = false)
    private Integer minAge;

    @Column(nullable = false)
    private Integer maxAge;

    @Column(nullable = false)
    private String eventAddress;


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

    @Column(nullable = false)
    private String zip_code;

    @Column(nullable = false)
    private Date beginDate;

    @Column(nullable = false)
    private Date endDate;

    @Column(nullable = false)
    private Time start_time;

    @Column(nullable = false)
    private Time end_time;

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

    @Column(name="organizerId", nullable = false)
    private UUID organizer_id;

}