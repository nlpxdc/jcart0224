package io.cjf.jcartadministrationback.service.impl;

import io.cjf.jcartadministrationback.po.Administrator;
import io.cjf.jcartadministrationback.service.AdministratorService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AdministratorServiceImplTest {

    @Autowired
    private AdministratorService administratorService;

    @Test
    void getByUsername() {
        String username = "admin";
        Administrator administrator = administratorService.getByUsername(username);
        assertNotNull(administrator);
        username = "admin110";
        administrator = administratorService.getByUsername(username);
        assertNull(administrator);
    }
}