package io.cjf.jcartadministrationback.service;

import io.cjf.jcartadministrationback.po.Administrator;

public interface AdministratorService {

    Administrator getById(Integer administratorId);

    Administrator getByUsername(String username);

    void update(Administrator administrator);

}
