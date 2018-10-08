package com.yacht.vliegveld.exception;

public class AirplaneOverfueledException extends RuntimeException {
    public AirplaneOverfueledException() {
        super();
    }

    public AirplaneOverfueledException(String msg) {
        super(msg);
    }
}
