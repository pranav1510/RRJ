package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.EmployeeInfo;
import com.rrj.rrj_interface.service.EmployeeInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/EmployeeInfo")
public class EmployeeInfoController {

    @Autowired
    private EmployeeInfoService employeeInfoService;

    @PostMapping("/add")
    public EmployeeInfo add(@RequestBody EmployeeInfo employeeInfo){
        return employeeInfoService.save(employeeInfo);
    }

    @GetMapping("/getlogininfo")
    public List<Object[]> getlogindetails(EmployeeInfo employeeInfo){
        return employeeInfoService.getLoginDetails(employeeInfo);
    }
}
