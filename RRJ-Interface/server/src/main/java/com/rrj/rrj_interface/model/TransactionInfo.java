package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TransactionInfo {

    @Id
    public String TransactionId;
    public String OrderId;
    public String FullName;
    public String Mobile;
    public String Amount;
    public String GoldWeight;
    public String SilverWeight;
    public String TransactionRemarks;
    public String TransactionType;
    public String TransactionSubject;
    public String TransactionStatus;
    public String TransactionName;
    public String CustomerDueStatus;
    public String CustomerDueAmount;
    public String RrjDueStatus;
    public String RrjDueAmount;

    public String getTransactionId() {
        return TransactionId;
    }

    public void setTransactionId(String transactionId) {
        TransactionId = transactionId;
    }

    public String getOrderId() {
        return OrderId;
    }

    public void setOrderId(String orderId) {
        OrderId = orderId;
    }

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String fullName) {
        FullName = fullName;
    }

    public String getMobile() {
        return Mobile;
    }

    public void setMobile(String mobile) {
        Mobile = mobile;
    }

    public String getAmount() {
        return Amount;
    }

    public void setAmount(String amount) {
        Amount = amount;
    }

    public String getGoldWeight() {
        return GoldWeight;
    }

    public void setGoldWeight(String goldWeight) {
        GoldWeight = goldWeight;
    }

    public String getSilverWeight() {
        return SilverWeight;
    }

    public void setSilverWeight(String silverWeight) {
        SilverWeight = silverWeight;
    }

    public String getTransactionRemarks() {
        return TransactionRemarks;
    }

    public void setTransactionRemarks(String transactionRemarks) {
        TransactionRemarks = transactionRemarks;
    }

    public String getTransactionType() {
        return TransactionType;
    }

    public void setTransactionType(String transactionType) {
        TransactionType = transactionType;
    }

    public String getTransactionSubject() {
        return TransactionSubject;
    }

    public void setTransactionSubject(String transactionSubject) {
        TransactionSubject = transactionSubject;
    }

    public String getTransactionStatus() {
        return TransactionStatus;
    }

    public void setTransactionStatus(String transactionStatus) {
        TransactionStatus = transactionStatus;
    }

    public String getTransactionName() {
        return TransactionName;
    }

    public void setTransactionName(String transactionName) {
        TransactionName = transactionName;
    }

    public String getCustomerDueStatus() {
        return CustomerDueStatus;
    }

    public void setCustomerDueStatus(String customerDueStatus) {
        CustomerDueStatus = customerDueStatus;
    }

    public String getCustomerDueAmount() {
        return CustomerDueAmount;
    }

    public void setCustomerDueAmount(String customerDueAmount) {
        CustomerDueAmount = customerDueAmount;
    }

    public String getRrjDueStatus() {
        return RrjDueStatus;
    }

    public void setRrjDueStatus(String rrjDueStatus) {
        RrjDueStatus = rrjDueStatus;
    }

    public String getRrjDueAmount() {
        return RrjDueAmount;
    }

    public void setRrjDueAmount(String rrjDueAmount) {
        RrjDueAmount = rrjDueAmount;
    }

    public TransactionInfo() {
    }

    public TransactionInfo(String transactionId, String orderId, String fullName, String mobile, String amount, String goldWeight, String silverWeight, String transactionRemarks, String transactionType, String transactionSubject, String transactionStatus, String transactionName, String customerDueStatus, String customerDueAmount, String rrjDueStatus, String rrjDueAmount) {
        TransactionId = transactionId;
        OrderId = orderId;
        FullName = fullName;
        Mobile = mobile;
        Amount = amount;
        GoldWeight = goldWeight;
        SilverWeight = silverWeight;
        TransactionRemarks = transactionRemarks;
        TransactionType = transactionType;
        TransactionSubject = transactionSubject;
        TransactionStatus = transactionStatus;
        TransactionName = transactionName;
        CustomerDueStatus = customerDueStatus;
        CustomerDueAmount = customerDueAmount;
        RrjDueStatus = rrjDueStatus;
        RrjDueAmount = rrjDueAmount;
    }
}
