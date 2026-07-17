package com.eshop.backend.entities;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "business_profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BusinessProfile {
    @Id
    @Column(name = "user_id")
    private Integer id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(name = "nip", nullable = false, unique = true)
    private String nip;

    @Column(name = "address", nullable = false)
    private String address;
}
