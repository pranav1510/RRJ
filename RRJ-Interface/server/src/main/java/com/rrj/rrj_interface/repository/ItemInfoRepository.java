package com.rrj.rrj_interface.repository;

import com.rrj.rrj_interface.model.ItemInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemInfoRepository extends JpaRepository<ItemInfo,Integer> {

    @Query("select e.ItemId FROM ItemInfo e ORDER BY e.ItemId DESC LIMIT 1")
    List<String> findItemId(String ItemId);

    @Query("select e.ItemId, e.ItemName, e.ItemPrice FROM ItemInfo e WHERE e.OrderId =?1")
    List<Object[]> getItemNameAndItemPrice(String OrderId);

    @Query("select e.ItemType, e.ItemNetWeight FROM ItemInfo e WHERE e.OrderId = ?1")
    List<Object[]> getWeight(String OrderId);

    @Query("select e FROM ItemInfo e WHERE e.OrderId =?1")
    List<ItemInfo> getItems(String OrderId);

    @Query("select e from ItemInfo e where e.ItemId = ?1")
    public ItemInfo findByItemId(String ItemId);
}
