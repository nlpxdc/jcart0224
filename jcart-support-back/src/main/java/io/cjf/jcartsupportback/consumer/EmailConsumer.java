package io.cjf.jcartsupportback.consumer;

import io.cjf.jcartsupportback.mq.EmailEvent;
import io.cjf.jcartsupportback.util.EmailUtil;
import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
//@RocketMQMessageListener(topic = "SendPwdResetByEmail", consumerGroup = "jcart-support-group01")
public class EmailConsumer implements RocketMQListener<EmailEvent> {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private EmailUtil emailUtil;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Override
    public void onMessage(EmailEvent emailEvent) {
        logger.info("{}", emailEvent);
        emailUtil.send(fromEmail, emailEvent.getToEmail(), emailEvent.getTitle(), emailEvent.getContent());
    }

}
