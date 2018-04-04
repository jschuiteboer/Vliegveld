package com.yacht.vliegveld.controller;

import com.yacht.vliegveld.exception.AirplaneOverfueledException;
import com.yacht.vliegveld.model.Airplane;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AirplaneControllerTest {

    @Autowired
    AirplaneController airplaneController;

    @Test
    public void testGetAll() throws Exception {
        //Arrange

        // Act
        Iterable<Airplane> result = airplaneController.getAll();

        // Asssert
        Assert.assertNotNull(result);
    }

    @Test
    public void testSave() throws Exception {
        //Arrange
        Airplane airplane = new Airplane();

        // Act
        Airplane result = airplaneController.save(airplane);

        // Asssert
        Assert.assertNotNull(result.getId());
    }

    @Test
    public void testSaveWithOverfueledPlane() throws Exception {
        //Arrange
        Airplane airplane = new Airplane();
        airplane.setFuel(AirplaneController.MAX_FUEL_LEVEL + 1);

        // Act
        try {
            airplaneController.save(airplane);

            Assert.fail("Expected an AirplaneOverfueledException to be thrown");
        } catch (AirplaneOverfueledException ex) {
            // Asssert
        }
    }
}