package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class DailyPrice {

    @Id
    public String Date;
    public String GoldCost;
    public String SilverCost;

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getGoldCost() {
        return GoldCost;
    }

    public void setGoldCost(String goldCost) {
        GoldCost = goldCost;
    }

    public String getSilverCost() {
        return SilverCost;
    }

    public void setSilverCost(String silverCost) {
        SilverCost = silverCost;
    }

    public DailyPrice() {
    }

    public DailyPrice(String date, String goldCost, String silverCost) {
        Date = date;
        GoldCost = goldCost;
        SilverCost = silverCost;
    }
}
