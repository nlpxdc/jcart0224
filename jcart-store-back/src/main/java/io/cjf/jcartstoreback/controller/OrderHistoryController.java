package io.cjf.jcartstoreback.controller;

import io.cjf.jcartstoreback.dto.out.OrderHistoryListOutDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orderhistory")
public class OrderHistoryController {

    @GetMapping("/getList")
    public List<OrderHistoryListOutDTO> getList(@RequestParam Integer orderId){
        return null;
    }

}
