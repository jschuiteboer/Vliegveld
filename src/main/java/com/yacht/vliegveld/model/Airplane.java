package com.yacht.vliegveld.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Airplane {
    @Id
    @GeneratedValue
    private Long id;

    /**
     * The amount of fuel in tons
     */
    private int fuel;
}
