package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ItemInfo;
import com.rrj.rrj_interface.model.PaymentInfo;

import java.util.List;

public interface ItemInfoService {

    public ItemInfo save(ItemInfo itemInfo);
    public List<String> getItemData(ItemInfo itemInfo);
    public List<Object[]> getItemNameAndPrice(PaymentInfo paymentInfo);

}
