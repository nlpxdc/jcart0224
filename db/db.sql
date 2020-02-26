SET
  FOREIGN_KEY_CHECKS = 0;
#------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_administrator`;
CREATE TABLE `jcart_administrator` (
    `administrator_id` int NOT NULL auto_increment,
    `username` varchar(20) not null,
    `real_name` varchar(20),
    `email` varchar(100) not null,
    `encrypted_password` varchar(100) not null,
    `status` tinyint not null,
    `create_time` datetime not null,
    `avatar_url` varchar(100),
    PRIMARY KEY (`administrator_id`),
    unique `idx_username` (`username`),
    unique `idx_email` (`email`),
    index `idx_real_name` (`real_name`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_address`;
CREATE TABLE `jcart_address` (
    `address_id` int NOT NULL auto_increment,
    `customer_id` int not null,
    `receiver_name` varchar(20) not null,
    `receiver_mobile` varchar(20) not null,
    `content` varchar(200) not null,
    `tag` varchar(20) not null,
    PRIMARY KEY (`address_id`),
    index `idx_customer_id` (`customer_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_customer`;
CREATE TABLE `jcart_customer` (
    `customer_id` int NOT NULL auto_increment,
    `username` varchar(30) not null,
    `real_name` varchar(20) not null,
    `avatar_url` varchar(100),
    `encrypted_password` varchar(100) not null,
    `mobile` varchar(20),
    `mobile_verified` bit,
    `email` varchar(100),
    `email_verified` bit,
    `status` tinyint not null,
    `create_time` datetime not null,
    `news_subscribed` bit not null,
    `reword_points` int not null,
    `default_address_id` int,
    PRIMARY KEY (`customer_id`),
    unique `idx_username` (`username`),
    unique `idx_mobile` (`mobile`),
    unique `idx_email` (`email`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_product`;
CREATE TABLE `jcart_product` (
    `product_id` int NOT NULL auto_increment,
    `product_code` varchar(50) not null,
    `product_name` varchar(100) not null,
    `product_abstract` varchar(300) not null,
    `price` double not null,
    `discount` double,
    `stock_quantity` int not null,
    `status` tinyint not null,
    `main_pic_url` varchar(100) not null,
    `reword_points` int,
    `sort_order` int,
    PRIMARY KEY (`product_id`),
    unique `idx_product_code` (`product_code`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_product_detail`;
CREATE TABLE `jcart_product_detail` (
    `product_id` int NOT NULL,
    `description` text not null,
    `other_pic_urls` varchar(2000),
    PRIMARY KEY (`product_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_order`;
CREATE TABLE `jcart_order` (
    `order_id` bigint NOT NULL auto_increment,
    `customer_id` int not null,
    `status` tinyint not null,
    `total_price` double not null,
    `reword_points` int,
    `create_time` datetime not null,
    `update_time` datetime not null,
    PRIMARY KEY (`order_id`),
    index `idx_customer_id` (`customer_id`),
    index `idx_create_time` (`create_time`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_order_detail`;
CREATE TABLE `jcart_order_detail` (
    `order_id` bigint NOT NULL,
    `ship_method` smallint not null,
    `ship_address` varchar(300),
    `ship_price` double not null,
    `pay_method` smallint not null,
    `invoice_address` varchar(300),
    `invoice_price` double not null,
    `comment` varchar(300),
    `order_products` text not null,
    PRIMARY KEY (`order_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_order_history`;
CREATE TABLE `jcart_order_history` (
    `order_history_id` bigint NOT NULL auto_increment,
    `order_id` int not null,
    `time` datetime not null,
    `order_status` tinyint not null,
    `comment` varchar(300),
    `customer_notified` bit not null,
    PRIMARY KEY (`order_history_id`),
    index `idx_order_id` (`order_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_return`;
CREATE TABLE `jcart_return` (
    `return_id` int NOT NULL auto_increment,
    `order_id` bigint not null,
    `order_time` datetime,
    `customer_id` int not null,
    `customer_name` varchar(20) not null,
    `mobile` varchar(20) not null,
    `email` varchar(100) not null,
    `status` tinyint not null,
    `action` tinyint,
    `product_code` varchar(50) not null,
    `product_name` varchar(100) not null,
    `quantity` int not null,
    `reason` tinyint not null,
    `opened` bit not null,
    `comment` varchar(300),
    `create_time` datetime not null,
    `update_time` datetime not null,
    PRIMARY KEY (`return_id`),
    index `idx_customer_id` (`customer_id`),
    index `idx_order_id` (`order_id`),
    index `idx_create_time` (`create_time`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_return_history`;
CREATE TABLE `jcart_return_history` (
    `return_history_id` bigint NOT NULL auto_increment,
    `return_id` int not null,
    `time` datetime not null,
    `return_status` tinyint not null,
    `comment` varchar(300),
    `customer_notified` bit not null,
    PRIMARY KEY (`return_history_id`),
    index `idx_return_id` (`return_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 auto_increment = 1;
#--------------------------------------------------------------------------
