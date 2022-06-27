/*package dps.seakers.backend.child;

import dps.seakers.backend.interest.Interest;
import dps.seakers.backend.parent.Parent;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Child")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Child {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "age")
    private Integer age;

    @Column(nullable = false, name = "firstName")
    private String firstName;

    @Column(nullable = false, name = "lastName")
    private String lastName;

    @ManyToMany(mappedBy="interestedChildren")
    @ToString.Exclude
    private List<Interest> interests;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "parentId", nullable = false)
    @ToString.Exclude
    private Parent parent;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Child child = (Child) o;
        return id != null && Objects.equals(id, child.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}*/
