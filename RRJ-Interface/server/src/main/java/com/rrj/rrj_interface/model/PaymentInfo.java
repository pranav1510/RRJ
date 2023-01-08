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
    private String CustomerMobile;
    private String CustomerFullName;
    private String AmountReceived;
    private String ExchangeGoldWeight;
    private String ExchangeGoldCost;
    private String ExchangeSilverWeight;
    private String ExchangeSilverCost;
    private String OrderPrice;
    private String Discount;
    private String CustomerDueStatus;
    private String CustomerDueAmount;
    private String RrjDueStatus;
    private String RrjDueAmount;
    private String PaymentRemarks;
    private String PaymentType;
    private String PaymentReceivedBy;
    private String TransactionName;
    private String PaymentPurpose;
    private String Status;

    public String getTransactionName() {
        return TransactionName;
    }

    public void setTransactionName(String transactionName) {
        TransactionName = transactionName;
    }

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

    public String getExchangeGoldWeight() {
        return ExchangeGoldWeight;
    }

    public void setExchangeGoldWeight(String exchangeGoldWeight) {
        ExchangeGoldWeight = exchangeGoldWeight;
    }

    public String getExchangeGoldCost() {
        return ExchangeGoldCost;
    }

    public void setExchangeGoldCost(String exchangeGoldCost) {
        ExchangeGoldCost = exchangeGoldCost;
    }

    public String getExchangeSilverWeight() {
        return ExchangeSilverWeight;
    }

    public void setExchangeSilverWeight(String exchangeSilverWeight) {
        ExchangeSilverWeight = exchangeSilverWeight;
    }

    public String getExchangeSilverCost() {
        return ExchangeSilverCost;
    }

    public void setExchangeSilverCost(String exchangeSilverCost) {
        ExchangeSilverCost = exchangeSilverCost;
    }

    public String getOrderPrice() {
        return OrderPrice;
    }

    public void setOrderPrice(String orderPrice) {
        OrderPrice = orderPrice;
    }

    public String getDiscount() {
        return Discount;
    }

    public void setDiscount(String discount) {
        Discount = discount;
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

    public String getPaymentRemarks() {
        return PaymentRemarks;
    }

    public void setPaymentRemarks(String paymentRemarks) {
        PaymentRemarks = paymentRemarks;
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
