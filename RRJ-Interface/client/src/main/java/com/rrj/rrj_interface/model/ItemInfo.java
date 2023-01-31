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
    private String ItemEnteredBy;
    private String ItemStatus;
    private String ItemPrice;
    private String ItemDeliveryDate;
    private String MakingCharges;
    private String ItemGrossWeight;
    private String ItemNetWeight;
    private String Wastage;
    private String PearlsWeight;
    private String OverallStoneWeight;
    private String StonesType;
    private String CzCost;
    private String EmeraldCost;
    private String RubyCost;
    private String PearlsCost;
    private String OverallStoneCost;

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

    public String getItemEnteredBy() {
        return ItemEnteredBy;
    }

    public void setItemEnteredBy(String itemEnteredBy) {
        ItemEnteredBy = itemEnteredBy;
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

    public String getPearlsWeight() {
        return PearlsWeight;
    }

    public void setPearlsWeight(String pearlsWeight) {
        PearlsWeight = pearlsWeight;
    }

    public String getOverallStoneWeight() {
        return OverallStoneWeight;
    }

    public void setOverallStoneWeight(String overallStoneWeight) {
        OverallStoneWeight = overallStoneWeight;
    }

    public String getStonesType() {
        return StonesType;
    }

    public void setStonesType(String stonesType) {
        StonesType = stonesType;
    }

    public String getCzCost() {
        return CzCost;
    }

    public void setCzCost(String czCost) {
        CzCost = czCost;
    }

    public String getEmeraldCost() {
        return EmeraldCost;
    }

    public void setEmeraldCost(String emeraldCost) {
        EmeraldCost = emeraldCost;
    }

    public String getRubyCost() {
        return RubyCost;
    }

    public void setRubyCost(String rubyCost) {
        RubyCost = rubyCost;
    }

    public String getPearlsCost() {
        return PearlsCost;
    }

    public void setPearlsCost(String pearlsCost) {
        PearlsCost = pearlsCost;
    }

    public String getOverallStoneCost() {
        return OverallStoneCost;
    }

    public void setOverallStoneCost(String overallStoneCost) {
        OverallStoneCost = overallStoneCost;
    }

    public ItemInfo() {
    }

    public ItemInfo(String itemId, String orderId, String itemName, String itemType, String customerComments, String orderReceiverComments, String itemEnteredBy, String itemStatus, String itemPrice, String itemDeliveryDate, String makingCharges, String itemGrossWeight, String itemNetWeight, String wastage, String pearlsWeight, String overallStoneWeight, String stonesType, String czCost, String emeraldCost, String rubyCost, String pearlsCost, String overallStoneCost) {
        ItemId = itemId;
        OrderId = orderId;
        ItemName = itemName;
        ItemType = itemType;
        CustomerComments = customerComments;
        OrderReceiverComments = orderReceiverComments;
        ItemEnteredBy = itemEnteredBy;
        ItemStatus = itemStatus;
        ItemPrice = itemPrice;
        ItemDeliveryDate = itemDeliveryDate;
        MakingCharges = makingCharges;
        ItemGrossWeight = itemGrossWeight;
        ItemNetWeight = itemNetWeight;
        Wastage = wastage;
        PearlsWeight = pearlsWeight;
        OverallStoneWeight = overallStoneWeight;
        StonesType = stonesType;
        CzCost = czCost;
        EmeraldCost = emeraldCost;
        RubyCost = rubyCost;
        PearlsCost = pearlsCost;
        OverallStoneCost = overallStoneCost;
    }
}
