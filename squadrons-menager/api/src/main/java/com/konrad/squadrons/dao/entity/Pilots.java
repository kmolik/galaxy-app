package com.konrad.squadrons.dao.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Pilots {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private String name;

    private  String surname;

    private  String squadron;

    public Pilots() {

    }

    public Pilots(Long id, String name, String surname, String squadron) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.squadron = squadron;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getSquadron() {
        return squadron;
    }

    public void setSquadron(String squadron) {
        this.squadron = squadron;
    }
}
