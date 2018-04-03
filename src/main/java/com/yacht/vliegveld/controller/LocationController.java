package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.model.Location;
import com.yacht.vliegveld.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/locations")
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    @GetMapping
    public Iterable<Location> getAll() {
        return this.locationRepository.findAll();
    }

    @PutMapping
    public Location save(@RequestBody Location airplane) {
        return this.locationRepository.save(airplane);
    }
}
