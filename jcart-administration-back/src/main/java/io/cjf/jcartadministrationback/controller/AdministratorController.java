package io.cjf.jcartadministrationback.controller;

import io.cjf.jcartadministrationback.dto.in.AdministratorLoginInDTO;
import io.cjf.jcartadministrationback.dto.in.AdministratorResetPwdInDTO;
import io.cjf.jcartadministrationback.dto.in.AdministratorUpdateProfileInDTO;
import io.cjf.jcartadministrationback.dto.out.AdministratorGetProfileOutDTO;
import io.cjf.jcartadministrationback.dto.out.AdministratorListOutDTO;
import io.cjf.jcartadministrationback.dto.out.PageOutDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/administrator")
public class AdministratorController {

    @GetMapping("/login")
    public String login(AdministratorLoginInDTO administratorLoginInDTO){
        return null;
    }

    @GetMapping("/getProfile")
    public AdministratorGetProfileOutDTO getProfile(@RequestParam(required = false) Integer adminstratorId){
        return null;
    }

    @PostMapping("/updateProfile")
    public void updateProfile(@RequestBody AdministratorUpdateProfileInDTO administratorUpdateProfileInDTO){

    }

    @GetMapping("/getPwdResetCode")
    public String getPwdResetCode(@RequestParam String email){
        return null;
    }

    @PostMapping("/resetPwd")
    public void resetPwd(@RequestBody AdministratorResetPwdInDTO administratorResetPwdInDTO){

    }

    @GetMapping("/getList")
    public PageOutDTO<AdministratorListOutDTO> getList(@RequestParam Integer pageNum){
        return null;
    }

}
