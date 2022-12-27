package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PaymentId;
    private String AmountReceived;
    private String ExchangeReceivedType;
    private String ExchangeReceivedCost;
    private String OrderPrice;
    private String Discount;
    private String CustomerDueStatus;
    private String CustomerDueAmount;
    private String RRJDueStatus;
    private String RRjDueAmount;
    private String PaymentRemarks;
    private String PaymentType;
    private String PaymentReceivedBy;
}
