package dps.seakers.backend.person;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "person")
@Getter
@Setter
public class PersonModel {
    @Id
    @GeneratedValue
    private UUID id;

    private String email;
    private String first_name;
    private String last_name;
}
