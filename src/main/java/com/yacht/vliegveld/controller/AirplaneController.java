package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Airplane;
import com.yacht.vliegveld.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/airplanes")
public class AirplaneController {
    private static final int MAX_FUEL_LEVEL = 5;

    @Autowired
    AirplaneRepository airplaneRepository;

    @GetMapping
    public Iterable<Airplane> getAll() {
        return this.airplaneRepository.findAll();
    }

    @PutMapping
    public Airplane save(@RequestBody Airplane airplane) {
        if(airplane.getFuel() > MAX_FUEL_LEVEL) {
            throw new RuntimeException("Can not exceed max fuel level of " + MAX_FUEL_LEVEL);
        }

        return this.airplaneRepository.save(airplane);
    }
}
