package com.rrj.rrj_interface.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ordertaking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int OrderId;
    private String Date;
    private String ExpectedDeliveryDate;
    private String CustomerMobile;
    private String CustomerRemarks;
    private String OrderReceiverRemarks;
    private String OrderStatus;
    private String OrderType;
    private String GST;
    private String OrderReceivedBy;
    private String OrderResponsibility;


}


