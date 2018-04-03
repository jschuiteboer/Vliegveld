package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Flight;
import com.yacht.vliegveld.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flights")
public class FlightController {

    @Autowired
    FlightRepository flightRepository;

    @GetMapping
    public Iterable<Flight> getAll() {
        return this.flightRepository.findAll();
    }

    @PutMapping
    public Flight save(@RequestBody Flight flight) {
        return this.flightRepository.save(flight);
    }
}
