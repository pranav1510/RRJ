package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ItemInfo;
import com.rrj.rrj_interface.model.PaymentInfo;
import com.rrj.rrj_interface.repository.ItemInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        return itemInfoRepository.findByItemId(itemInfo.getItemId());
    }

    @Override
    public List<Object[]> getItemNameAndPrice(PaymentInfo paymentInfo) {
        return itemInfoRepository.getItemNameAndItemPrice(paymentInfo.getPaymentId());
    }
}
