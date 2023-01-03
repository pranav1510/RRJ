package com.rrj.rrj_interface.service;

;
import com.rrj.rrj_interface.model.Ordertaking;

import java.util.List;

public interface OrdertakingService {

    public Ordertaking save(Ordertaking ordertaking);

    public List<Ordertaking> getOrderData(Ordertaking ordertaking);
}
