package com.rrj.rrj_interface.model;

import jakarta.persistence.*;


@Entity
public class Ordertaking {

    @Id
    private String OrderId;
    private String Date;
    private String GoldCost;
    private String SilverCost;
    private String ExpectedDeliveryDate;
    private String CustomerMobile;
    private String CustomerFullName;
    private String CustomerRemarks;
    private String OrderReceiverRemarks;
    private String OrderStatus;
    private String Gst;
    private String OrderReceivedBy;
    private String OrderResponsibility;

    public String getOrderId() {
        return OrderId;
    }

    public void setOrderId(String orderId) {
        OrderId = orderId;
    }

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

    public String getExpectedDeliveryDate() {
        return ExpectedDeliveryDate;
    }

    public void setExpectedDeliveryDate(String expectedDeliveryDate) {
        ExpectedDeliveryDate = expectedDeliveryDate;
    }

    public String getCustomerMobile() {
        return CustomerMobile;
    }

    public void setCustomerMobile(String customerMobile) {
        CustomerMobile = customerMobile;
    }

    public String getCustomerFullName() {
        return CustomerFullName;
    }

    public void setCustomerFullName(String customerFullName) {
        CustomerFullName = customerFullName;
    }

    public String getCustomerRemarks() {
        return CustomerRemarks;
    }

    public void setCustomerRemarks(String customerRemarks) {
        CustomerRemarks = customerRemarks;
    }

    public String getOrderReceiverRemarks() {
        return OrderReceiverRemarks;
    }

    public void setOrderReceiverRemarks(String orderReceiverRemarks) {
        OrderReceiverRemarks = orderReceiverRemarks;
    }

    public String getOrderStatus() {
        return OrderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        OrderStatus = orderStatus;
    }

    public String getGst() {
        return Gst;
    }

    public void setGST(String gst) {
        Gst = gst;
    }

    public String getOrderReceivedBy() {
        return OrderReceivedBy;
    }

    public void setOrderReceivedBy(String orderReceivedBy) {
        OrderReceivedBy = orderReceivedBy;
    }

    public String getOrderResponsibility() {
        return OrderResponsibility;
    }

    public void setOrderResponsibility(String orderResponsibility) {
        OrderResponsibility = orderResponsibility;
    }

    public Ordertaking() {
    }

    public Ordertaking(String orderId, String date, String goldCost, String silverCost, String expectedDeliveryDate, String customerMobile, String customerFullName, String customerRemarks, String orderReceiverRemarks, String orderStatus, String gst, String orderReceivedBy, String orderResponsibility) {
        OrderId = orderId;
        Date = date;
        GoldCost = goldCost;
        SilverCost = silverCost;
        ExpectedDeliveryDate = expectedDeliveryDate;
        CustomerMobile = customerMobile;
        CustomerFullName = customerFullName;
        CustomerRemarks = customerRemarks;
        OrderReceiverRemarks = orderReceiverRemarks;
        OrderStatus = orderStatus;
        Gst = gst;
        OrderReceivedBy = orderReceivedBy;
        OrderResponsibility = orderResponsibility;
    }
}


