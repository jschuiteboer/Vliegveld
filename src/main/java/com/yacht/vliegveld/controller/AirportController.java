package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Airport;
import com.yacht.vliegveld.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/airports")
public class AirportController {

    @Autowired
    AirportRepository airportRepository;

    @GetMapping
    public Iterable<Airport> getAll() {
        return this.airportRepository.findAll();
    }

    @PutMapping
    public Airport save(@RequestBody Airport airport) {
        return this.airportRepository.save(airport);
    }
}
