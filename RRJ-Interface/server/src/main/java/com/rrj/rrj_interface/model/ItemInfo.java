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
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
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
    private String StonesCost;

}
