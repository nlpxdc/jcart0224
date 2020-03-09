package io.cjf.jcartadministrationback.controller;

import com.github.pagehelper.Page;
import io.cjf.jcartadministrationback.dto.in.ReturnSearchInDTO;
import io.cjf.jcartadministrationback.dto.in.ReturnUpdateActionInDTO;
import io.cjf.jcartadministrationback.dto.out.PageOutDTO;
import io.cjf.jcartadministrationback.dto.out.ReturnListOutDTO;
import io.cjf.jcartadministrationback.dto.out.ReturnShowOutDTO;
import io.cjf.jcartadministrationback.po.Return;
import io.cjf.jcartadministrationback.service.ReturnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/return")
@CrossOrigin
public class ReturnController {

    @Autowired
    private ReturnService returnService;

    @GetMapping("/search")
    public PageOutDTO<ReturnListOutDTO> search(ReturnSearchInDTO returnSearchInDTO,
                                               @RequestParam(required = false, defaultValue = "1") Integer pageNum) {
        Page<Return> page = returnService.search(returnSearchInDTO, pageNum);
        List<ReturnListOutDTO> returnListOutDTOS = page.stream().map(aReturn -> {
            ReturnListOutDTO returnListOutDTO = new ReturnListOutDTO();
            returnListOutDTO.setReturnId(aReturn.getReturnId());
            returnListOutDTO.setOrderId(aReturn.getOrderId());
            returnListOutDTO.setCustomerId(aReturn.getCustomerId());
            returnListOutDTO.setCustomerName(aReturn.getCustomerName());
            returnListOutDTO.setProductCode(aReturn.getProductCode());
            returnListOutDTO.setProductName(aReturn.getProductName());
            returnListOutDTO.setStatus(aReturn.getStatus());
            returnListOutDTO.setCreateTimestamp(aReturn.getCreateTime().getTime());
            returnListOutDTO.setUpdateTimestamp(aReturn.getUpdateTime().getTime());
            return returnListOutDTO;
        }).collect(Collectors.toList());

        PageOutDTO<ReturnListOutDTO> pageOutDTO = new PageOutDTO<>();
        pageOutDTO.setTotal(page.getTotal());
        pageOutDTO.setPageSize(page.getPageSize());
        pageOutDTO.setPageNum(page.getPageNum());
        pageOutDTO.setList(returnListOutDTOS);

        return pageOutDTO;
    }

    @GetMapping("/getById")
    public ReturnShowOutDTO getById(@RequestParam Integer returnId) {

        Return aReturn = returnService.getById(returnId);
        ReturnShowOutDTO returnShowOutDTO = new ReturnShowOutDTO();
        returnShowOutDTO.setReturnId(aReturn.getReturnId());
        returnShowOutDTO.setOrderId(aReturn.getOrderId());
        returnShowOutDTO.setOrderTimestamp(aReturn.getOrderTime().getTime());
        returnShowOutDTO.setCustomerId(aReturn.getCustomerId());
        returnShowOutDTO.setCustomerName(aReturn.getCustomerName());
        returnShowOutDTO.setMobile(aReturn.getMobile());
        returnShowOutDTO.setEmail(aReturn.getEmail());
        returnShowOutDTO.setStatus(aReturn.getStatus());
        returnShowOutDTO.setAction(aReturn.getAction());
        returnShowOutDTO.setProductCode(aReturn.getProductCode());
        returnShowOutDTO.setProductName(aReturn.getProductName());
        returnShowOutDTO.setQuantity(aReturn.getQuantity());
        returnShowOutDTO.setReason(aReturn.getReason());
        returnShowOutDTO.setOpened(aReturn.getOpened());
        returnShowOutDTO.setComment(aReturn.getComment());
        returnShowOutDTO.setCreateTimestamp(aReturn.getCreateTime().getTime());
        returnShowOutDTO.setUpdateTimestamp(aReturn.getUpdateTime().getTime());

        return returnShowOutDTO;
    }

    @PostMapping("/updateAction")
    public void updateAction(@RequestBody ReturnUpdateActionInDTO returnUpdateActionInDTO) {
        Return aReturn = new Return();
        aReturn.setReturnId(returnUpdateActionInDTO.getReturnId());
        aReturn.setAction(returnUpdateActionInDTO.getAction());
        aReturn.setUpdateTime(new Date());
        returnService.update(aReturn);
    }

}
