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

    @GetMapping("airports")
    public String airports(Model model) {
        model.addAttribute("pageTitle", "Airports");

        return "airports";
    }

    @GetMapping("flights")
    public String flights(Model model) {
        model.addAttribute("pageTitle", "Flights");

        return "flights";
    }
}
