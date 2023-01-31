package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TransactionInfo {

    @Id
    public String TransactionId;
    public String OrderId;
    public int CustomerId;
    public String CustomerFullName;
    public String CustomerMobile;
    public String TransactionDate;
    public String Amount;
    public String GoldWeight;
    public String SilverWeight;
    public String TransactionDescription;
    public String TransactionType;
    public String PaymentType;
    public String ReceivedType;
    public String TransactionStatus;
    public String CustomerDueStatus;
    public String CustomerDueAmount;
    public String RrjDueStatus;
    public String RrjDueAmount;
    public String TransactionDoneBy;
    public String TransactionEnteredBy;

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

    public String getAmount() {
        return Amount;
    }

    public String getTransactionDate() {
        return TransactionDate;
    }

    public void setTransactionDate(String transactionDate) {
        TransactionDate = transactionDate;
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

    public String getTransactionDescription() {
        return TransactionDescription;
    }

    public void setTransactionDescription(String transactionDescription) {
        TransactionDescription = transactionDescription;
    }

    public String getTransactionType() {
        return TransactionType;
    }

    public void setTransactionType(String transactionType) {
        TransactionType = transactionType;
    }

    public String getPaymentType() {
        return PaymentType;
    }

    public void setPaymentType(String paymentType) {
        PaymentType = paymentType;
    }

    public String getReceivedType() {
        return ReceivedType;
    }

    public void setReceivedType(String receivedType) {
        ReceivedType = receivedType;
    }

    public String getTransactionStatus() {
        return TransactionStatus;
    }

    public void setTransactionStatus(String transactionStatus) {
        TransactionStatus = transactionStatus;
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

    public String getTransactionDoneBy() {
        return TransactionDoneBy;
    }

    public void setTransactionDoneBy(String transactionDoneBy) {
        TransactionDoneBy = transactionDoneBy;
    }

    public String getTransactionEnteredBy() {
        return TransactionEnteredBy;
    }

    public void setTransactionEnteredBy(String transactionEnteredBy) {
        TransactionEnteredBy = transactionEnteredBy;
    }

    public TransactionInfo() {
    }

    public TransactionInfo(String transactionId, String orderId, int customerId, String customerFullName, String customerMobile, String transactionDate, String amount, String goldWeight, String silverWeight, String transactionDescription, String transactionType, String paymentType, String receivedType, String transactionStatus, String customerDueStatus, String customerDueAmount, String rrjDueStatus, String rrjDueAmount, String transactionDoneBy, String transactionEnteredBy) {
        TransactionId = transactionId;
        OrderId = orderId;
        CustomerId = customerId;
        CustomerFullName = customerFullName;
        CustomerMobile = customerMobile;
        TransactionDate = transactionDate;
        Amount = amount;
        GoldWeight = goldWeight;
        SilverWeight = silverWeight;
        TransactionDescription = transactionDescription;
        TransactionType = transactionType;
        PaymentType = paymentType;
        ReceivedType = receivedType;
        TransactionStatus = transactionStatus;
        CustomerDueStatus = customerDueStatus;
        CustomerDueAmount = customerDueAmount;
        RrjDueStatus = rrjDueStatus;
        RrjDueAmount = rrjDueAmount;
        TransactionDoneBy = transactionDoneBy;
        TransactionEnteredBy = transactionEnteredBy;
    }
}
