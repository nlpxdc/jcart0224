## 1.1 客户注册

URL: /customer/register  
Method：POST  

RequestBody:  
```json
{
    "username": "user01",
    "realName": "张三",
    "mobile": "13234567890",
    "email": "aa@qq.com",
    "password": "123456",
    "newsSubscribed": false
}
```

ResponseBody:  
```
123456
```

Request Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| username   | String   | 用户名    |
| realName   | String   | 真实姓名    |
| mobile   | String   | 手机    |
| email   | String   | 邮箱    |
| password   | String   | 密码    |
| newsSubscribed   | Boolean   | 订阅新闻    |

Response Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
|    | Integer   | 客户Id    |

## 1.2 客户登陆

URL: /customer/login?username={username}&password={password}  
Method：GET  

ResponseBody:  
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Request Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| username   | String   | 用户名    |
| password   | String   | 密码    |

Response Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
|    | String   | jwt token    |

## 1.3 客户修改密码

URL: /customer/changepassword  
Method：POST  

RequestHeader:  
jwtToken: xxx

RequestBody:  
```json
{
    "originPwd": "123456",
    "newPwd": "abcdef"
}
```

Request Header  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| jwtToken   | String   | 登陆后jwtToken    |

Request Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| originPwd   | String   | 用户名    |
| newPwd   | String   | 真实姓名    |

