## 2.1 查询面试列表（面试时间降序）

URL: /interview/search?keyword={keyword}&onlyme={onlyme}&time={time}  
Method：GET  

ResponseBody:  
```json
[
    {
        "interviewId":1234,
        "company": "华为",
        "studentId": 234,
        "studentName": "cjf",
        "time": "2019-12-12T00:00:00.000+0000",
        "timestamp": 1575448390345,
        "status": 1
    },
    {
        "interviewId":1234,
        "company": "华为",
        "studentId": 234,
        "studentName": "cjf",
        "time": "2019-12-12T00:00:00.000+0000",
        "timestamp": 1575448390345,
        "status": 1
    }
]

```

Request Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| keyword   | String   | 关键字，暂时支持只公司名    |
| onlyme   | Boolean   | 只看自己    |
| time   | Long   | 时间戳    |

Response Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| interviewId   | Integer   | 面试Id    |
| company   | String   | 公司名    |
| studentId   | String   | 学生Id    |
| studentName   | String   | 面试学生    |
| time   | Long   | 面试时间, 按照时间降序    |
| status   | byte   | 面试状态    |


## 2.2 创建面试

URL: /interview/create  
Method：POST  

RequestBody:  
```json
{
    "company": "华为",
    "address": "上海徐家汇",
    "time": 1575448390345
}

```

ResponseBody:  
```json
123456

```

Request Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| company   | String   | 公司名    |
| address   | String   | 公司地址    |
| time   | Long   | 面试时间戳    |

Response Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
|    | Integer   | 面试Id    |


## 3.1 笔试题上传

URL: /examphoto/upload  
Method：POST  
Request Content-Type: multipart/formdata  
RequestParam: interviewId
RequestParam: examphotos  

ResponseBody:  
```json
[
    "http://xxx.com/xxx1.jpg",
    "http://xxx.com/xxx2.jpg"
]

```

Request Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
| interviewId   | Integer   | 面试Id    |
| examphotos   | String   | 上传文件key    |

Response Field  

| 字段     |     类型 |   描述   | 
| :--------------: | :--------:| :------: |
|    | Array(String)   | 上传图片后Urls    |

