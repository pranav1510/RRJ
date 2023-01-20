package com.rrj.rrj_interface.controller;

import com.rrj.rrj_interface.model.CustomerInfo;
import com.rrj.rrj_interface.model.Ordertaking;
import com.rrj.rrj_interface.service.CustomerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/CustomerInfo")
public class CustomerInfoController {

    @Autowired
    private CustomerInfoService customerInfoService;

    @PostMapping("/add")
    public String add(@RequestBody CustomerInfo customerInfo) {
        try {
            customerInfoService.save(customerInfo);
            return "Customer Information Saved Successfully";
        }
        catch (Exception ex1){
            return ex1.getMessage();
        }
    }

    @PostMapping("/check")
    public List<String> getCustomer(@RequestBody Ordertaking ordertaking){
        return customerInfoService.getCustomerData(ordertaking);
    }

    @PostMapping("/getcustomer")
    public List<CustomerInfo> getcustomerdetails(@RequestBody CustomerInfo customerInfo){
        return  customerInfoService.findCustomer(customerInfo);
    }

    @PutMapping("/customerupdate/{CustomerMobile}")
    public ResponseEntity<CustomerInfo> customerupdate(@RequestBody CustomerInfo customerInfo, @PathVariable String CustomerMobile){
        return customerInfoService.updateCustomer(customerInfo, CustomerMobile);
    }
}
