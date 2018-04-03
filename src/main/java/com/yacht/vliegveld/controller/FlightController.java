package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Flight;
import com.yacht.vliegveld.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
    private static final int FLIGHT_FUEL_COST = 2;

    @Autowired
    FlightRepository flightRepository;

    @GetMapping
    public Iterable<Flight> getAll() {
        return this.flightRepository.findAll();
    }

    @PutMapping
    public Flight save(@RequestBody Flight flight) {
        if(flight.getAirplane().getFuel() < FLIGHT_FUEL_COST) {
            // TODO: use more specific exception, I'm short on time
            throw new RuntimeException("Not enough fuel to start the flight");
        }

        return this.flightRepository.save(flight);
    }
}
