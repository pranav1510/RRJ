package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.ClosingInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClosingInfoRepository extends JpaRepository<ClosingInfo, String> {

    @Query("select e.Date, e.Cash, e.Gold, e.Silver, e.Account FROM ClosingInfo e ORDER BY e.Date DESC LIMIT 1")
    public List<Object[]> getdetails();
}
