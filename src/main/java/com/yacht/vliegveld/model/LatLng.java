package com.yacht.vliegveld.model;

import lombok.Data;

/**
 * World coordinate, used as json object for google maps.
 */
@Data
public class LatLng {
    private double lat;
    private double lng;

    public LatLng(double lat, double lng) {
        this.setLat(lat);
        this.setLng(lng);
    }
}
