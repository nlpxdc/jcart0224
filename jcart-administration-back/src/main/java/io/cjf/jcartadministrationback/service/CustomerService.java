package io.cjf.jcartadministrationback.service;

import com.github.pagehelper.Page;
import io.cjf.jcartadministrationback.dto.in.CustomerSetStatusInDTO;
import io.cjf.jcartadministrationback.po.Customer;

public interface CustomerService {

    Page<Customer> search(Integer pageNum);

    Customer getById(Integer customerId);

    void setStatus(CustomerSetStatusInDTO customerSetStatusInDTO);

}
