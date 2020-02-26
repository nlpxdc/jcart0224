package io.cjf.jcartstoreback;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("io.cjf.jcartstoreback.dao")
public class JcartStoreBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(JcartStoreBackApplication.class, args);
    }

}
