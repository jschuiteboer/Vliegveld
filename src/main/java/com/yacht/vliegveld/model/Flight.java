package com.yacht.vliegveld.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Flight {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Airplane airplane;

    @ManyToOne
    private Airport origin;

    @ManyToOne
    private Airport destination;
}
