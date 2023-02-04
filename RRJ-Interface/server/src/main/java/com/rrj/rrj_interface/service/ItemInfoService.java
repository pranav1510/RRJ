package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ItemInfo;
import com.rrj.rrj_interface.model.PaymentInfo;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ItemInfoService {

    public ItemInfo save(ItemInfo itemInfo);
    public List<String> getItemData(ItemInfo itemInfo);
    public List<ItemInfo> getItemNameAndPrice(PaymentInfo paymentInfo);
    public List<Object[]> getWeight(ItemInfo itemInfo);
    public List<ItemInfo> getItems(ItemInfo itemInfo);
    public ResponseEntity<ItemInfo> updateItem(ItemInfo itemInfo, String ItemId);
    public ItemInfo findByItemId(ItemInfo itemInfo);

}
