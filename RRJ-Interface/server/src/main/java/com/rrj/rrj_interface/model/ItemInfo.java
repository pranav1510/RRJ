package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ItemInfo {

    @Id
    private String ItemId;
    private String OrderId;
    private String ItemName;
    private String ItemType;
    private String CustomerComments;
    private String OrderReceiverComments;
    private String ItemResponsibility;
    private String ItemStatus;
    private String ItemPrice;
    private String ItemDeliveryDate;
    private String MakingCharges;
    private String ItemGrossWeight;
    private String ItemNetWeight;
    private String Wastage;
    private String BeadsWeight;
    private String StoneWeight;
    private String BeadsCost;
    private String StoneCost;

    public String getItemId() {
        return ItemId;
    }

    public void setItemId(String itemId) {
        ItemId = itemId;
    }

    public String getOrderId() {
        return OrderId;
    }

    public void setOrderId(String orderId) {
        OrderId = orderId;
    }

    public String getItemName() {
        return ItemName;
    }

    public void setItemName(String itemName) {
        ItemName = itemName;
    }

    public String getItemType() {
        return ItemType;
    }

    public void setItemType(String itemType) {
        ItemType = itemType;
    }

    public String getCustomerComments() {
        return CustomerComments;
    }

    public void setCustomerComments(String customerComments) {
        CustomerComments = customerComments;
    }

    public String getOrderReceiverComments() {
        return OrderReceiverComments;
    }

    public void setOrderReceiverComments(String orderReceiverComments) {
        OrderReceiverComments = orderReceiverComments;
    }

    public String getItemResponsibility() {
        return ItemResponsibility;
    }

    public void setItemResponsibility(String itemResponsibility) {
        ItemResponsibility = itemResponsibility;
    }

    public String getItemStatus() {
        return ItemStatus;
    }

    public void setItemStatus(String itemStatus) {
        ItemStatus = itemStatus;
    }

    public String getItemPrice() {
        return ItemPrice;
    }

    public void setItemPrice(String itemPrice) {
        ItemPrice = itemPrice;
    }

    public String getItemDeliveryDate() {
        return ItemDeliveryDate;
    }

    public void setItemDeliveryDate(String itemDeliveryDate) {
        ItemDeliveryDate = itemDeliveryDate;
    }

    public String getMakingCharges() {
        return MakingCharges;
    }

    public void setMakingCharges(String makingCharges) {
        MakingCharges = makingCharges;
    }

    public String getItemGrossWeight() {
        return ItemGrossWeight;
    }

    public void setItemGrossWeight(String itemGrossWeight) {
        ItemGrossWeight = itemGrossWeight;
    }

    public String getItemNetWeight() {
        return ItemNetWeight;
    }

    public void setItemNetWeight(String itemNetWeight) {
        ItemNetWeight = itemNetWeight;
    }

    public String getWastage() {
        return Wastage;
    }

    public void setWastage(String wastage) {
        Wastage = wastage;
    }

    public String getBeadsWeight() {
        return BeadsWeight;
    }

    public void setBeadsWeight(String beadsWeight) {
        BeadsWeight = beadsWeight;
    }

    public String getStoneWeight() {
        return StoneWeight;
    }

    public void setStoneWeight(String stoneWeight) {
        StoneWeight = stoneWeight;
    }

    public String getBeadsCost() {
        return BeadsCost;
    }

    public void setBeadsCost(String beadsCost) {
        BeadsCost = beadsCost;
    }

    public String getStoneCost() {
        return StoneCost;
    }

    public void setStoneCost(String stoneCost) {
        StoneCost = stoneCost;
    }

    public ItemInfo() {
    }

    public ItemInfo(String itemId, String orderId, String itemName, String itemType, String customerComments, String orderReceiverComments, String itemResponsibility, String itemStatus, String itemPrice, String itemDeliveryDate, String makingCharges, String itemGrossWeight, String itemNetWeight, String wastage, String beadsWeight, String stoneWeight, String beadsCost, String stoneCost) {
        ItemId = itemId;
        OrderId = orderId;
        ItemName = itemName;
        ItemType = itemType;
        CustomerComments = customerComments;
        OrderReceiverComments = orderReceiverComments;
        ItemResponsibility = itemResponsibility;
        ItemStatus = itemStatus;
        ItemPrice = itemPrice;
        ItemDeliveryDate = itemDeliveryDate;
        MakingCharges = makingCharges;
        ItemGrossWeight = itemGrossWeight;
        ItemNetWeight = itemNetWeight;
        Wastage = wastage;
        BeadsWeight = beadsWeight;
        StoneWeight = stoneWeight;
        BeadsCost = beadsCost;
        StoneCost = stoneCost;
    }
}
