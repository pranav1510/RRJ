package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.ClosingInfo;

import java.util.List;

public interface ClosingInfoService {

    public ClosingInfo save(ClosingInfo closingInfo);
    public List<Object[]> getdetails();
}
