package com.yacht.vliegveld.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class FrontEndController {
    @GetMapping("/")
    public String airplanes(Model model) {
        model.addAttribute("pageTitle", "Airplanes");

        return "airplanes";
    }

    @GetMapping("locations")
    public String locations(Model model) {
        model.addAttribute("pageTitle", "Locations");

        return "locations";
    }
}
