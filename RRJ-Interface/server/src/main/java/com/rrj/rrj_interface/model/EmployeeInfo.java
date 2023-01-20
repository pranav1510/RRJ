package com.rrj.rrj_interface.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EmployeeInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int EmployeeId;
    public String EmployeeUsername;
    public String Password;
    public String EmployeeName;
    public String EmployeeMobile;
    public String Role;
    public String Status;

    public int getEmployeeId() {
        return EmployeeId;
    }

    public void setEmployeeId(int employeeId) {
        EmployeeId = employeeId;
    }

    public String getEmployeeUsername() {
        return EmployeeUsername;
    }

    public void setEmployeeUsername(String employeeUsername) {
        EmployeeUsername = employeeUsername;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getEmployeeName() {
        return EmployeeName;
    }

    public void setEmployeeName(String employeeName) {
        EmployeeName = employeeName;
    }

    public String getEmployeeMobile() {
        return EmployeeMobile;
    }

    public void setEmployeeMobile(String employeeMobile) {
        EmployeeMobile = employeeMobile;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        Role = role;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public EmployeeInfo() {
    }

    public EmployeeInfo(int employeeId, String employeeUsername, String password, String employeeName, String employeeMobile, String role, String status) {
        EmployeeId = employeeId;
        EmployeeUsername = employeeUsername;
        Password = password;
        EmployeeName = employeeName;
        EmployeeMobile = employeeMobile;
        Role = role;
        Status = status;
    }
}
