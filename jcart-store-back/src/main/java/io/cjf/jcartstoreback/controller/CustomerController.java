package io.cjf.jcartstoreback.controller;

import at.favre.lib.crypto.bcrypt.BCrypt;
import io.cjf.jcartstoreback.constant.ClientExceptionConstant;
import io.cjf.jcartstoreback.dto.in.*;
import io.cjf.jcartstoreback.dto.out.CustomerGetProfileOutDTO;
import io.cjf.jcartstoreback.dto.out.CustomerLoginOutDTO;
import io.cjf.jcartstoreback.exception.ClientException;
import io.cjf.jcartstoreback.po.Customer;
import io.cjf.jcartstoreback.service.CustomerService;
import io.cjf.jcartstoreback.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("/register")
    public Integer register(@RequestBody CustomerRegisterInDTO customerRegisterInDTO){
        Integer customerId = customerService.register(customerRegisterInDTO);
        return customerId;
    }

    @GetMapping("/login")
    public CustomerLoginOutDTO login(CustomerLoginInDTO customerLoginInDTO) throws ClientException {
        Customer customer = customerService.getByUsername(customerLoginInDTO.getUsername());
        if (customer == null){
            throw new ClientException(ClientExceptionConstant.CUSTOMER_USERNAME_NOT_EXIST_ERRCODE, ClientExceptionConstant.CUSTOMER_USERNAME_NOT_EXIST_ERRMSG);
        }
        String encPwdDB = customer.getEncryptedPassword();
        BCrypt.Result result = BCrypt.verifyer().verify(customerLoginInDTO.getPassword().toCharArray(), encPwdDB);

        if (result.verified) {
            CustomerLoginOutDTO customerLoginOutDTO = jwtUtil.issueToken(customer);
            return customerLoginOutDTO;
        }else {
            throw new ClientException(ClientExceptionConstant.CUSTOMER_PASSWORD_INVALID_ERRCODE, ClientExceptionConstant.CUSTOMER_PASSWORD_INVALID_ERRMSG);
        }
    }

    @GetMapping("/getProfile")
    public CustomerGetProfileOutDTO getProfile(@RequestAttribute Integer customerId){
        Customer customer = customerService.getById(customerId);
        CustomerGetProfileOutDTO customerGetProfileOutDTO = new CustomerGetProfileOutDTO();
        customerGetProfileOutDTO.setUsername(customer.getUsername());
        customerGetProfileOutDTO.setRealName(customer.getRealName());
        customerGetProfileOutDTO.setMobile(customer.getMobile());
        customerGetProfileOutDTO.setMobileVerified(customer.getMobileVerified());
        customerGetProfileOutDTO.setEmail(customer.getEmail());
        customerGetProfileOutDTO.setEmailVerified(customer.getEmailVerified());

        return customerGetProfileOutDTO;
    }

    @PostMapping("/updateProfile")
    public void updateProfile(@RequestBody CustomerUpdateProfileInDTO customerUpdateProfileInDTO,
                              @RequestAttribute Integer customerId){
        Customer customer = new Customer();
        customer.setCustomerId(customerId);
        customer.setRealName(customerUpdateProfileInDTO.getRealName());
        customer.setMobile(customerUpdateProfileInDTO.getMobile());
        customer.setEmail(customerUpdateProfileInDTO.getEmail());
        customerService.update(customer);
    }

    @PostMapping("/changePwd")
    public void changePwd(@RequestBody CustomerChangePwdInDTO customerChangePwdInDTO,
                          @RequestAttribute Integer customerId) throws ClientException {
        Customer customer = customerService.getById(customerId);
        String encPwdDB = customer.getEncryptedPassword();
        BCrypt.Result result = BCrypt.verifyer().verify(customerChangePwdInDTO.getOriginPwd().toCharArray(), encPwdDB);

        if (result.verified) {
            String newPwd = customerChangePwdInDTO.getNewPwd();
            String bcryptHashString = BCrypt.withDefaults().hashToString(12, newPwd.toCharArray());
            customer.setEncryptedPassword(bcryptHashString);
            customerService.update(customer);
        }else {
            throw new ClientException(ClientExceptionConstant.CUSTOMER_PASSWORD_INVALID_ERRCODE, ClientExceptionConstant.CUSTOMER_PASSWORD_INVALID_ERRMSG);
        }

    }

    @GetMapping("/getPwdResetCode")
    public String getPwdResetCode(@RequestParam String email){
        return null;
    }

    @PostMapping("/resetPwd")
    public void resetPwd(@RequestBody CustomerResetPwdInDTO customerResetPwdInDTO){

    }



}
