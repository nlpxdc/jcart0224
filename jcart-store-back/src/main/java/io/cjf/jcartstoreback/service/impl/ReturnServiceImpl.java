package io.cjf.jcartstoreback.service.impl;

import io.cjf.jcartstoreback.dao.ReturnMapper;
import io.cjf.jcartstoreback.po.Return;
import io.cjf.jcartstoreback.service.ReturnService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReturnServiceImpl implements ReturnService {

    @Autowired
    private ReturnMapper returnMapper;

    @Override
    public Integer create(Return aReturn) {
        returnMapper.insertSelective(aReturn);
        Integer returnId = aReturn.getReturnId();
        return returnId;
    }
}
