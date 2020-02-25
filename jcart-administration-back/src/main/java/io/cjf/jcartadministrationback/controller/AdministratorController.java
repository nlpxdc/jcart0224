package io.cjf.jcartadministrationback.controller;

import io.cjf.jcartadministrationback.dto.in.AdministratorLoginInDTO;
import io.cjf.jcartadministrationback.dto.in.AdministratorUpdateProfileInDTO;
import io.cjf.jcartadministrationback.dto.out.AdministratorGetProfileOutDTO;
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

}
