package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;
}
