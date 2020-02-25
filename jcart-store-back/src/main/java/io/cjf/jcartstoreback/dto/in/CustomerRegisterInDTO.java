package io.cjf.jcartstoreback.dto.in;

public class CustomerRegisterInDTO {
    private String username;
    private String realName;
    private String email;
    private String mobile;
    private String password;
    private Boolean newsSubscribed;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getNewsSubscribed() {
        return newsSubscribed;
    }

    public void setNewsSubscribed(Boolean newsSubscribed) {
        this.newsSubscribed = newsSubscribed;
    }
}
