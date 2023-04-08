package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.DayInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DayInfoRepository extends JpaRepository<DayInfo,String> {

    @Query("select e FROM DayInfo e WHERE e.Date =?1")
    public List<DayInfo> getdetails(String Date);

    @Query("select e FROM DayInfo e WHERE e.Id =?1")
    public DayInfo findbyId(String Id);

}
