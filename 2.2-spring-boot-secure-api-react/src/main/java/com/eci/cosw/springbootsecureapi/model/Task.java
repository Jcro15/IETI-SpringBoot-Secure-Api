package com.eci.cosw.springbootsecureapi.model;

import java.util.Date;

public class Task {
    private String text;
    private String state;
    private Date dueDate;
    private Responsible responsible;

    public Task() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public Responsible getResponsible() {
        return responsible;
    }

    public void setResponsible(Responsible responsible) {
        this.responsible = responsible;
    }

    @Override
    public String toString() {
        return "Task{" +
                "text='" + text + '\'' +
                ", state='" + state + '\'' +
                ", dueDate=" + dueDate +
                ", responsible=" + responsible +
                '}';
    }
}
