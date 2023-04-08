package com.rrj.rrj_interface.service;

import com.rrj.rrj_interface.model.DayInfo;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface DayInfoService {

    public DayInfo save(DayInfo dayInfo);
    public List<DayInfo> getdetails(DayInfo dayInfo);
    public ResponseEntity<DayInfo> updateinfo(DayInfo dayInfo, String Id);

    public void deleteinfo();
}
