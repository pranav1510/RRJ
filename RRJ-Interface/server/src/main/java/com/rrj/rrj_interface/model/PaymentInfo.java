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
    private String PaymentId;
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
    private String RRJDueStatus;
    private String RRjDueAmount;
    private String PaymentRemarks;
    private String PaymentType;
    private String PaymentReceivedBy;
}
