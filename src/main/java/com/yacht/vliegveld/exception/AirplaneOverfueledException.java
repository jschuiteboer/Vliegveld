package com.yacht.vliegveld.exception;

public class AirplaneOverfueledException extends RuntimeException {
    public AirplaneOverfueledException() {}

    public AirplaneOverfueledException(String msg) {
        super(msg);
    }
}
