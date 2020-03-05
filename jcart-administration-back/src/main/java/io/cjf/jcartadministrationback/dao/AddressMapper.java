package io.cjf.jcartadministrationback.dao;

import io.cjf.jcartadministrationback.po.Address;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressMapper {
    int deleteByPrimaryKey(Integer addressId);

    int insert(Address record);

    int insertSelective(Address record);

    Address selectByPrimaryKey(Integer addressId);

    int updateByPrimaryKeySelective(Address record);

    int updateByPrimaryKey(Address record);

//    custom

    List<Address> selectByCustomerId(@Param("customerId") Integer customerId);

}