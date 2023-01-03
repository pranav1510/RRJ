package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.ItemInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemInfoRepository extends JpaRepository<ItemInfo,Integer> {

    @Query("select e FROM ItemInfo e ORDER BY e.ItemId DESC LIMIT 1")
    List<ItemInfo> findByItemId(String ItemId);
}
