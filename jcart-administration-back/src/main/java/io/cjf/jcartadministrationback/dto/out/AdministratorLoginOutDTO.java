package io.cjf.jcartadministrationback.dto.out;

public class AdministratorLoginOutDTO {
    private String token;
    private Long expireTimestamp;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Long getExpireTimestamp() {
        return expireTimestamp;
    }

    public void setExpireTimestamp(Long expireTimestamp) {
        this.expireTimestamp = expireTimestamp;
    }
}
