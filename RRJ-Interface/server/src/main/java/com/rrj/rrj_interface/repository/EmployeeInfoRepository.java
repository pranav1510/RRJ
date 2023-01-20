package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.EmployeeInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeInfoRepository extends JpaRepository<EmployeeInfo, Integer> {

    @Query("select e.EmployeeUsername, e.Password FROM EmployeeInfo e")
    public List<Object[]> getLoginInfo(EmployeeInfo employeeInfo);
}
