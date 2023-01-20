package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.EmployeeInfo;
import com.rrj.rrj_interface.repository.EmployeeInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeInfoServiceImpl implements EmployeeInfoService {

    @Autowired
    private EmployeeInfoRepository employeeInfoRepository;

    @Override
    public EmployeeInfo save(EmployeeInfo employeeInfo) {
        return employeeInfoRepository.save(employeeInfo);
    }

    @Override
    public List<Object[]> getLoginDetails(EmployeeInfo employeeInfo) {
        return employeeInfoRepository.getLoginInfo(employeeInfo);
    }
}
