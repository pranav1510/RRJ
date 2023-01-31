package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.DailyPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DailyPriceRepository extends JpaRepository<DailyPrice, String> {

    @Query(value = "select e.GoldCost, e.SilverCost FROM DailyPrice e ORDER BY e.Date DESC LIMIT 1")
    List<Object[]> getDailyPrice();
}
