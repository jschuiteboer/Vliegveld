package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Airplane;
import com.yacht.vliegveld.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/airplanes")
public class AirplaneController {

    @Autowired
    AirplaneRepository airplaneRepository;

    @GetMapping
    public Iterable<Airplane> getAll() {
        return this.airplaneRepository.findAll();
    }
}
