package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CustomerInfo {

    private String CustomerFullName;
    @Id
    private String CustomerMobile;
    private String AlternateMobileOne;
    private String AlternateMobileTwo;
    private String Address;
    private String Remarks;

    public String getCustomerFullName() {
        return CustomerFullName;
    }

    public void setCustomerFullName(String customerFullName) {
        CustomerFullName = customerFullName;
    }

    public String getCustomerMobile() {
        return CustomerMobile;
    }

    public void setCustomerMobile(String customerMobile) {
        CustomerMobile = customerMobile;
    }

    public String getAlternateMobileOne() {
        return AlternateMobileOne;
    }

    public void setAlternateMobileOne(String alternateMobileOne) {
        AlternateMobileOne = alternateMobileOne;
    }

    public String getAlternateMobileTwo() {
        return AlternateMobileTwo;
    }

    public void setAlternateMobileTwo(String alternateMobileTwo) {
        AlternateMobileTwo = alternateMobileTwo;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getRemarks() {
        return Remarks;
    }

    public void setRemarks(String remarks) {
        Remarks = remarks;
    }

    public CustomerInfo() {
    }

    public CustomerInfo(String customerFullName, String customerMobile, String alternateMobileOne, String alternateMobileTwo, String address, String remarks) {
        CustomerFullName = customerFullName;
        CustomerMobile = customerMobile;
        AlternateMobileOne = alternateMobileOne;
        AlternateMobileTwo = alternateMobileTwo;
        Address = address;
        Remarks = remarks;
    }
}
