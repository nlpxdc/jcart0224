package io.cjf.jcartadministrationback.dto.in;

public class AdministratorChangePwdInDTO {
    private String originPwd;
    private String newPwd;

    public String getOriginPwd() {
        return originPwd;
    }

    public void setOriginPwd(String originPwd) {
        this.originPwd = originPwd;
    }

    public String getNewPwd() {
        return newPwd;
    }

    public void setNewPwd(String newPwd) {
        this.newPwd = newPwd;
    }
}
