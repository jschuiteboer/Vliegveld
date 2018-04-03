package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AirplaneController {

    @Autowired
    AirplaneRepository airplaneRepository;
}
