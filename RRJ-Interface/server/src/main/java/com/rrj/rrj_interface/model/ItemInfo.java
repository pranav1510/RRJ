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
    private String CzWeight;
    private String CzCost;
    private String EmeraldWeight;
    private String EmeraldCost;
    private String RubyWeight;
    private String RubyCost;
    private String PearlsCost;
    private String OverallStoneCost;
    private String OtherWeight;
    private String TotalWeight;
    private String GoldCost;
    private String SilverCost;
    private String EstimatedWeight;
    private String DesignDetails;

    public String getEstimatedWeight() {
        return EstimatedWeight;
    }

    public void setEstimatedWeight(String estimatedWeight) {
        EstimatedWeight = estimatedWeight;
    }

    public String getDesignDetails() {
        return DesignDetails;
    }

    public void setDesignDetails(String designDetails) {
        DesignDetails = designDetails;
    }

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

    public String getCzWeight() {
        return CzWeight;
    }

    public void setCzWeight(String czWeight) {
        CzWeight = czWeight;
    }

    public String getCzCost() {
        return CzCost;
    }

    public void setCzCost(String czCost) {
        CzCost = czCost;
    }

    public String getEmeraldWeight() {
        return EmeraldWeight;
    }

    public void setEmeraldWeight(String emeraldWeight) {
        EmeraldWeight = emeraldWeight;
    }

    public String getEmeraldCost() {
        return EmeraldCost;
    }

    public void setEmeraldCost(String emeraldCost) {
        EmeraldCost = emeraldCost;
    }

    public String getRubyWeight() {
        return RubyWeight;
    }

    public void setRubyWeight(String rubyWeight) {
        RubyWeight = rubyWeight;
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

    public String getOtherWeight() {
        return OtherWeight;
    }

    public void setOtherWeight(String otherWeight) {
        OtherWeight = otherWeight;
    }

    public String getTotalWeight() {
        return TotalWeight;
    }

    public void setTotalWeight(String totalWeight) {
        TotalWeight = totalWeight;
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

    public ItemInfo() {
    }

    public ItemInfo(String itemId, String orderId, String itemName, String itemType, String customerComments, String orderReceiverComments, String itemEnteredBy, String itemStatus, String itemPrice, String itemDeliveryDate, String makingCharges, String itemGrossWeight, String itemNetWeight, String wastage, String pearlsWeight, String overallStoneWeight, String stonesType, String czWeight, String czCost, String emeraldWeight, String emeraldCost, String rubyWeight, String rubyCost, String pearlsCost, String overallStoneCost, String otherWeight, String totalWeight, String goldCost, String silverCost, String estimatedWeight, String designDetails) {
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
        CzWeight = czWeight;
        CzCost = czCost;
        EmeraldWeight = emeraldWeight;
        EmeraldCost = emeraldCost;
        RubyWeight = rubyWeight;
        RubyCost = rubyCost;
        PearlsCost = pearlsCost;
        OverallStoneCost = overallStoneCost;
        OtherWeight = otherWeight;
        TotalWeight = totalWeight;
        GoldCost = goldCost;
        SilverCost = silverCost;
        EstimatedWeight = estimatedWeight;
        DesignDetails = designDetails;
    }
}