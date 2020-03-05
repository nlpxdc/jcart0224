package io.cjf.jcartadministrationback.service.impl;

import io.cjf.jcartadministrationback.dao.AddressMapper;
import io.cjf.jcartadministrationback.po.Address;
import io.cjf.jcartadministrationback.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressMapper addressMapper;

    @Override
    public Address getById(Integer addressId) {
        Address address = addressMapper.selectByPrimaryKey(addressId);
        return address;
    }
}
