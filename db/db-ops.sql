SET
  FOREIGN_KEY_CHECKS = 0;
#------------------------------------------------------------------------
  DROP TABLE IF EXISTS `jcart_product_operation`;
CREATE TABLE `jcart_product_operation` (
    `product_id` int NOT NULL,
    `all_count` int not null,
    `day_count` int not null,
    `recent_time` datetime not null,
    PRIMARY KEY (`product_id`),
    index `idx_all_count` (`all_count`),
    index `idx_day_count` (`day_count`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;