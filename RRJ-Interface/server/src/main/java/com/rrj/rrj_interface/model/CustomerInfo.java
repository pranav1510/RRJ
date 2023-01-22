package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomerInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int CustomerId;
    private String CustomerFullName;
    private String CustomerMobile;
    private String AlternateMobileOne;
    private String AlternateMobileTwo;
    private String Address;
    private String Remarks;

    public int getCustomerId() {
        return CustomerId;
    }

    public void setCustomerId(int customerId) {
        CustomerId = customerId;
    }

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

    public CustomerInfo(int customerId, String customerFullName, String customerMobile, String alternateMobileOne, String alternateMobileTwo, String address, String remarks) {
        CustomerId = customerId;
        CustomerFullName = customerFullName;
        CustomerMobile = customerMobile;
        AlternateMobileOne = alternateMobileOne;
        AlternateMobileTwo = alternateMobileTwo;
        Address = address;
        Remarks = remarks;
    }
}
