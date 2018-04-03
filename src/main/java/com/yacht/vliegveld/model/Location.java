package com.yacht.vliegveld.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Location {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
