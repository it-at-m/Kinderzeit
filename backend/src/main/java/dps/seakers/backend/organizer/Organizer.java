package dps.seakers.backend.organizer;

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
@Table(name="Organizer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Organizer {
    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false, unique = true)
    private String organizer_name;

    @Column(nullable = false, unique = true)
    private String organizer_description;

    @Column(nullable = false)
    private String email_contact;

    @Column()
    private String mobile_phone;

    @Column()
    private String website_URL;
}