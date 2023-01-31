package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.EmployeeInfo;

import java.util.List;

public interface EmployeeInfoService {

    public EmployeeInfo save(EmployeeInfo employeeInfo);

    public List<Object[]> getLoginDetails(EmployeeInfo employeeInfo);
}
