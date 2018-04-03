package com.yacht.vliegveld.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Airport {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    /**
     * The geographical location of the airport
     */
    private long lat;
    private long lng;
}
