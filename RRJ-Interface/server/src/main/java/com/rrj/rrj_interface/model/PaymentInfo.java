package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInfo{

    @Id
    private String PaymentId;
    private String PaymentDate;
    private String OrderId;
    private int CustomerId;
    private String CustomerMobile;
    private String CustomerFullName;
    private String AmountReceived;
    private String ExchangeWeight;
    private String ExchangeCost;
    private String GoldWeight;
    private String SilverWeight;
    private String OrderPrice;
    private String CustomerDueStatus;
    private String CustomerDueAmount;
    private String CustomerDueGold;
    private String CustomerDueSilver;
    private String RrjDueStatus;
    private String RrjDueAmount;
    private String RrjDueGold;
    private String RrjDueSilver;
    private String PaymentDescription;
    private String TransactionType;
    private String PaymentType;
    private String PaymentReceivedBy;
    private String PaymentEnteredBy;
    private String SentType;
    private String Percentage;
    private String OneGramCost;
    private String PaymentPurpose;
    private String Status;

    public String getPaymentId() {
        return PaymentId;
    }

    public void setPaymentId(String paymentId) {
        PaymentId = paymentId;
    }

    public String getPaymentDate() {
        return PaymentDate;
    }

    public void setPaymentDate(String paymentDate) {
        PaymentDate = paymentDate;
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

    public String getAmountReceived() {
        return AmountReceived;
    }

    public void setAmountReceived(String amountReceived) {
        AmountReceived = amountReceived;
    }

    public String getExchangeWeight() {
        return ExchangeWeight;
    }

    public void setExchangeWeight(String exchangeWeight) {
        ExchangeWeight = exchangeWeight;
    }

    public String getExchangeCost() {
        return ExchangeCost;
    }

    public void setExchangeCost(String exchangeCost) {
        ExchangeCost = exchangeCost;
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

    public String getOrderPrice() {
        return OrderPrice;
    }

    public void setOrderPrice(String orderPrice) {
        OrderPrice = orderPrice;
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

    public String getCustomerDueGold() {
        return CustomerDueGold;
    }

    public void setCustomerDueGold(String customerDueGold) {
        CustomerDueGold = customerDueGold;
    }

    public String getCustomerDueSilver() {
        return CustomerDueSilver;
    }

    public void setCustomerDueSilver(String customerDueSilver) {
        CustomerDueSilver = customerDueSilver;
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

    public String getRrjDueGold() {
        return RrjDueGold;
    }

    public void setRrjDueGold(String rrjDueGold) {
        RrjDueGold = rrjDueGold;
    }

    public String getRrjDueSilver() {
        return RrjDueSilver;
    }

    public void setRrjDueSilver(String rrjDueSilver) {
        RrjDueSilver = rrjDueSilver;
    }

    public String getPaymentDescription() {
        return PaymentDescription;
    }

    public void setPaymentDescription(String paymentDescription) {
        PaymentDescription = paymentDescription;
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

    public String getPaymentReceivedBy() {
        return PaymentReceivedBy;
    }

    public void setPaymentReceivedBy(String paymentReceivedBy) {
        PaymentReceivedBy = paymentReceivedBy;
    }

    public String getPaymentEnteredBy() {
        return PaymentEnteredBy;
    }

    public void setPaymentEnteredBy(String paymentEnteredBy) {
        PaymentEnteredBy = paymentEnteredBy;
    }

    public String getSentType() {
        return SentType;
    }

    public void setSentType(String sentType) {
        SentType = sentType;
    }

    public String getPercentage() {
        return Percentage;
    }

    public void setPercentage(String percentage) {
        Percentage = percentage;
    }

    public String getOneGramCost() {
        return OneGramCost;
    }

    public void setOneGramCost(String oneGramCost) {
        OneGramCost = oneGramCost;
    }

    public String getPaymentPurpose() {
        return PaymentPurpose;
    }

    public void setPaymentPurpose(String paymentPurpose) {
        PaymentPurpose = paymentPurpose;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }
}
