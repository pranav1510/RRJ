package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ClosingInfo {

    @Id
    public String Date;
    public String Cash;
    public String Gold;
    public String Silver;
    public String Account;

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getCash() {
        return Cash;
    }

    public void setCash(String cash) {
        Cash = cash;
    }

    public String getGold() {
        return Gold;
    }

    public void setGold(String gold) {
        Gold = gold;
    }

    public String getSilver() {
        return Silver;
    }

    public void setSilver(String silver) {
        Silver = silver;
    }

    public String getAccount() {
        return Account;
    }

    public void setAccount(String account) {
        Account = account;
    }

    public ClosingInfo() {
    }

    public ClosingInfo(String date, String cash, String gold, String silver, String account) {
        Date = date;
        Cash = cash;
        Gold = gold;
        Silver = silver;
        Account = account;
    }
}
