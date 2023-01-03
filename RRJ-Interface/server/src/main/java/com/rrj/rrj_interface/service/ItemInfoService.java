package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ItemInfo;

import java.util.List;

public interface ItemInfoService {

    public ItemInfo save(ItemInfo itemInfo);

    public List<ItemInfo> getItemData(ItemInfo itemInfo);
}
