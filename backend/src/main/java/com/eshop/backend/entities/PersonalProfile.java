package com.eshop.backend.entities;

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "personal_profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PersonalProfile {
    @Id
    @Column(name = "user_id")
    private Integer id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;
}
