package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class DayInfo {

    @Id
    public String Id;
    public String CashIn;
    public String CashOut;
    public String GoldIn;
    public String GoldOut;
    public String SilverIn;
    public String SilverOut;
    public String AccountIn;
    public String AccountOut;

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getCashIn() {
        return CashIn;
    }

    public void setCashIn(String cashIn) {
        CashIn = cashIn;
    }

    public String getCashOut() {
        return CashOut;
    }

    public void setCashOut(String cashOut) {
        CashOut = cashOut;
    }

    public String getGoldIn() {
        return GoldIn;
    }

    public void setGoldIn(String goldIn) {
        GoldIn = goldIn;
    }

    public String getGoldOut() {
        return GoldOut;
    }

    public void setGoldOut(String goldOut) {
        GoldOut = goldOut;
    }

    public String getSilverIn() {
        return SilverIn;
    }

    public void setSilverIn(String silverIn) {
        SilverIn = silverIn;
    }

    public String getSilverOut() {
        return SilverOut;
    }

    public void setSilverOut(String silverOut) {
        SilverOut = silverOut;
    }

    public String getAccountIn() {
        return AccountIn;
    }

    public void setAccountIn(String accountIn) {
        AccountIn = accountIn;
    }

    public String getAccountOut() {
        return AccountOut;
    }

    public void setAccountOut(String accountOut) {
        AccountOut = accountOut;
    }

    public DayInfo() {
    }

    public DayInfo(String id, String cashIn, String cashOut, String goldIn, String goldOut, String silverIn, String silverOut, String accountIn, String accountOut) {
        Id = id;
        CashIn = cashIn;
        CashOut = cashOut;
        GoldIn = goldIn;
        GoldOut = goldOut;
        SilverIn = silverIn;
        SilverOut = silverOut;
        AccountIn = accountIn;
        AccountOut = accountOut;
    }
}
