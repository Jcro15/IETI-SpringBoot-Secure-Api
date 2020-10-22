package com.eci.cosw.springbootsecureapi.model;

public class Responsible {
    public String name;
    public String email;

    public Responsible() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Responsible{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
