package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.DayInfo;
import com.rrj.rrj_interface.service.DayInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/DayInfo")
public class DayInfoController {

    @Autowired
    private DayInfoService dayInfoService;

    @PostMapping("/add")
    public DayInfo add(@RequestBody DayInfo dayInfo){
        return dayInfoService.save(dayInfo);
    }

    @PostMapping("/getdetails")
    public List<DayInfo> getdetails(@RequestBody DayInfo dayInfo){
        return dayInfoService.getdetails(dayInfo);
    }

    @PutMapping("infoupdate/{Id}")
    public ResponseEntity<DayInfo> updateinfo(@RequestBody DayInfo dayInfo, @PathVariable String Id) {
        return dayInfoService.updateinfo(dayInfo, Id);
    }

    @DeleteMapping("/deleteinfo")
    public void delete(){
        dayInfoService.deleteinfo();
    }
}
