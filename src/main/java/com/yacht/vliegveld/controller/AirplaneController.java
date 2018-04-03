package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Airplane;
import com.yacht.vliegveld.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/airplanes")
public class AirplaneController {

    @Autowired
    AirplaneRepository airplaneRepository;

    @GetMapping
    public Iterable<Airplane> getAll() {
        return this.airplaneRepository.findAll();
    }

    @PutMapping
    public Airplane save(@RequestBody Airplane airplane) {
        return this.airplaneRepository.save(airplane);
    }
}
