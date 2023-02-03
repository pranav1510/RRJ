package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.ClosingInfo;
import com.rrj.rrj_interface.service.ClosingInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("ClosingInfo")
public class ClosingInfoController {

    @Autowired
    private ClosingInfoService closingInfoService;

    @PostMapping("/add")
    public ClosingInfo save(@RequestBody ClosingInfo closingInfo){
        return closingInfoService.save(closingInfo);
    }

    @GetMapping("/getdetails")
    public List<Object[]> getdetails(){
        return closingInfoService.getdetails();
    }

    @PostMapping("getdate")
    public boolean getdate(@RequestBody ClosingInfo closingInfo){
        return closingInfoService.getDate(closingInfo);
    }
}
