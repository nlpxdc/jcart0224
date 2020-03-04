package io.cjf.jcartstoreback.service;

import io.cjf.jcartstoreback.dto.in.OrderCheckoutInDTO;

public interface OrderService {

    Long checkout(OrderCheckoutInDTO orderCheckoutInDTO,
                     Integer customerId);

}
