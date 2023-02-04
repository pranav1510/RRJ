package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ItemInfo;
import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.repository.ItemInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemInfoServiceImpl implements ItemInfoService {

    @Autowired
    private ItemInfoRepository itemInfoRepository;

    @Override
    public ItemInfo save(ItemInfo itemInfo) {
        return itemInfoRepository.save(itemInfo);
    }

    @Override
    public List<String> getItemData(ItemInfo itemInfo) {
        return itemInfoRepository.findItemId(itemInfo.getItemId());
    }

    @Override
    public List<ItemInfo> getItemNameAndPrice(PaymentInfo paymentInfo) {
        return itemInfoRepository.getItemNameAndItemPrice(paymentInfo.getOrderId());
    }

    @Override
    public List<Object[]> getWeight(ItemInfo itemInfo) {
        return itemInfoRepository.getWeight(itemInfo.getItemId());
    }

    @Override
    public List<ItemInfo> getItems(ItemInfo itemInfo) {
        return itemInfoRepository.getItems(itemInfo.getOrderId());
    }

    @Override
    public ResponseEntity<ItemInfo> updateItem(ItemInfo itemInfo, String ItemId) {
        ItemInfo updateitem = itemInfoRepository.findByItemId(ItemId);

        updateitem.setItemName(itemInfo.getItemName());
        updateitem.setItemEnteredBy(itemInfo.getItemEnteredBy());
        updateitem.setItemPrice(itemInfo.getItemPrice());
        updateitem.setItemStatus(itemInfo.getItemStatus());
        updateitem.setItemType(itemInfo.getItemType());
        updateitem.setCustomerComments(itemInfo.getCustomerComments());
        updateitem.setCzCost(itemInfo.getCzCost());
        updateitem.setEmeraldCost(itemInfo.getEmeraldCost());
        updateitem.setItemDeliveryDate(itemInfo.getItemDeliveryDate());
        updateitem.setItemGrossWeight(itemInfo.getItemGrossWeight());
        updateitem.setItemNetWeight(itemInfo.getItemNetWeight());
        updateitem.setMakingCharges(itemInfo.getMakingCharges());
        updateitem.setOrderReceiverComments(itemInfo.getOrderReceiverComments());
        updateitem.setRubyCost(itemInfo.getRubyCost());
        updateitem.setPearlsCost(itemInfo.getPearlsCost());
        updateitem.setPearlsWeight(itemInfo.getPearlsWeight());
        updateitem.setOverallStoneWeight(itemInfo.getOverallStoneWeight());
        updateitem.setOverallStoneCost(itemInfo.getOverallStoneCost());
        updateitem.setStonesType(itemInfo.getStonesType());
        updateitem.setWastage(itemInfo.getWastage());

        itemInfoRepository.save(updateitem);

        return ResponseEntity.ok(updateitem);
    }

    @Override
    public ItemInfo findByItemId(ItemInfo itemInfo) {
        return itemInfoRepository.findByItemId(itemInfo.getItemId());
    }
}
