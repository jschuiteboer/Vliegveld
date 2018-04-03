package com.yacht.vliegveld.repository;

import com.yacht.vliegveld.model.Flight;
import org.springframework.data.repository.CrudRepository;

public interface FlightRepository extends CrudRepository<Flight, Long> {
}
