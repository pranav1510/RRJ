package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.DailyPrice;
import com.rrj.rrj_interface.service.DailyPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/DailyPrice")
public class DailyPriceController {

    @Autowired
    private DailyPriceService dailyPriceService;

    @PostMapping("/add")
    public List<Object[]> add(@RequestBody DailyPrice dailyPrice){
        dailyPriceService.save(dailyPrice);
        return dailyPriceService.getprice();
    }

    @GetMapping("/dailyprice")
    public List<Object[]> getdailyprice(){
        return dailyPriceService.getprice();
    }
}
