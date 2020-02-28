package io.cjf.jcartstoreback.filter;

import com.auth0.jwt.exceptions.JWTVerificationException;
import io.cjf.jcartstoreback.constant.ClientExceptionConstant;
import io.cjf.jcartstoreback.exception.ClientException;
import io.cjf.jcartstoreback.util.JWTUtil;
import io.cjf.jcartstoreback.vo.CustomerLoginVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Set;

@Order(2)
@Component
public class LoginFilter implements Filter {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private JWTUtil jwtUtil;

    @Value("${jwt.exclude.apiUrls}")
    private Set<String> excludeLoginApiUrls;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        HttpServletRequest request = (HttpServletRequest) servletRequest;

        final String method = request.getMethod();
        if (method.equals("OPTIONS")){
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        final String requestURI = request.getRequestURI();

        if (excludeLoginApiUrls.contains(requestURI)) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        String token = request.getHeader("jcartToken");
//        if (token == null || token.isEmpty()){
//            token = request.getParameter("jcartToken");
//        }
        if (token == null || token.isEmpty()) {
            throw new ClientException(ClientExceptionConstant.TOKEN_NOT_EXIST_ERRCODE, ClientExceptionConstant.TOKEN_NOT_EXIST_ERRMSG);
        }

        logger.info("verify login with token: {}", token);

        CustomerLoginVO administratorLoginVO = null;
        try {
            administratorLoginVO = jwtUtil.verifyToken(token);
        }catch (JWTVerificationException ex){
            throw new ClientException(ClientExceptionConstant.TOKEN_INVALID_ERRCODE, ex.getMessage());
        }

        request.setAttribute("customerId", administratorLoginVO.getCustomerId());
        request.setAttribute("customerUsername", administratorLoginVO.getUsername());

        filterChain.doFilter(servletRequest, servletResponse);
        return;
    }
}
