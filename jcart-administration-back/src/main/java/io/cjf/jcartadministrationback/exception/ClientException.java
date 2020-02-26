package io.cjf.jcartadministrationback.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.ServletException;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ClientException extends ServletException {

    private String errCode;

    public ClientException(String errCode, String errMsg){
        super(errMsg);
        this.errCode = errCode;
    }

    public String getErrCode() {
        return errCode;
    }

    public void setErrCode(String errCode) {
        this.errCode = errCode;
    }
}
