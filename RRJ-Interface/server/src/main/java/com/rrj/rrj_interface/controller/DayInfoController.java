package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.DayInfo;
import com.rrj.rrj_interface.service.DayInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/DayInfo")
public class DayInfoController {

    @Autowired
    private DayInfoService dayInfoService;

    @PostMapping("/add")
    public DayInfo add(@RequestBody DayInfo dayInfo){
        return dayInfoService.save(dayInfo);
    }
}