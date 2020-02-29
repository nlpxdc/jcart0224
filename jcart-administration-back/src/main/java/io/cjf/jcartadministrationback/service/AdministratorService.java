package io.cjf.jcartadministrationback.service;

import io.cjf.jcartadministrationback.po.Administrator;
import io.cjf.jcartadministrationback.po.Customer;

public interface AdministratorService {

    Administrator getByUsername(String username);

}
