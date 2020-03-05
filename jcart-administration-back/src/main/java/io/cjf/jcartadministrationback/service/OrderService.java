package io.cjf.jcartadministrationback.service;

import com.github.pagehelper.Page;
import io.cjf.jcartadministrationback.dto.out.OrderListOutDTO;

public interface OrderService {

    Page<OrderListOutDTO> search(Integer pageNum);

}
