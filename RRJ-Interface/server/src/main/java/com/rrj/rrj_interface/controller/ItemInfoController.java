package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.ItemInfo;
import com.rrj.rrj_interface.service.ItemInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/ItemInfo")
public class ItemInfoController {

    @Autowired
    private ItemInfoService itemInfoService;

    @PostMapping("/add")
    public String add(@RequestBody ItemInfo itemInfo){
        itemInfoService.save(itemInfo);
        return "New Item Saved Successfully!";
    }

    @PostMapping("/itemid")
    public List<ItemInfo> getItem(@RequestBody ItemInfo itemInfo){
        return itemInfoService.getItemData(itemInfo);
    }
}
