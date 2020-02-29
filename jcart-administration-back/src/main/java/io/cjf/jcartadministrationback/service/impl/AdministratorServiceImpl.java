package io.cjf.jcartadministrationback.service.impl;

import io.cjf.jcartadministrationback.dao.AdministratorMapper;
import io.cjf.jcartadministrationback.po.Administrator;
import io.cjf.jcartadministrationback.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministratorServiceImpl implements AdministratorService {

    @Autowired
    private AdministratorMapper administratorMapper;

    @Override
    public Administrator getByUsername(String username) {
        Administrator administrator = administratorMapper.selectByUsername(username);
        return administrator;
    }
}
