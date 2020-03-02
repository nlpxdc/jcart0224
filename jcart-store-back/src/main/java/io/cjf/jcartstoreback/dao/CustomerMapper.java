package io.cjf.jcartstoreback.dao;

import io.cjf.jcartstoreback.po.Customer;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
    int deleteByPrimaryKey(Integer customerId);

    int insert(Customer record);

    int insertSelective(Customer record);

    Customer selectByPrimaryKey(Integer customerId);

    int updateByPrimaryKeySelective(Customer record);

    int updateByPrimaryKey(Customer record);

//    custom

    Customer selectByUsername(@Param("username") String username);

    Customer selectByEmail(@Param("email") String email);
    
}