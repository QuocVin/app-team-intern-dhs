  CREATE SCHEMA `app_intern_dhs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci ;

  CREATE TABLE `app_intern_dhs`.`users` (
    `id` 				    INT NOT NULL AUTO_INCREMENT,
    `username` 		    VARCHAR(50) NOT NULL,
    `password` 		    VARCHAR(255) NOT NULL,
    `name` 			    VARCHAR(70) NOT NULL,
    `date_ob` 		    datetime NULL,
    `phone` 			    VARCHAR(20) NULL,
    `mail` 			    VARCHAR(50) NULL,
    `created_date` 	    datetime NULL DEFAULT CURRENT_TIMESTAMP,
    `role_name` 		    VARCHAR(50) DEFAULT 'USER' NULL,
                  -- USER, GUEST, MANAGER, ADMIN
  PRIMARY KEY (`id`));

  INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (1,'admin','123456','Trần Anh Tuấn', '1996-05-22', '0932411', 'admin@gmail.com', '2022-03-15', 'ADMIN');
  INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (2,'quanly1','123456','Nguyễn Tuấn Anh', '1991-10-14', '09324', 'mana@gmail.com', '2022-03-21', 'MANAGER');
  INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (3,'user1','123456','Nguyễn Thúy Kiều', '1991-11-14', '09324', 'user1@gmail.com', '2022-03-21', 'USER');
  INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (4,'user2','123456','Lý Văn Bá', '1991-12-14', '09324', 'user2@gmail.com', '2022-03-21', 'USER');
  INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (5,'user3','123456','Trần Tuấn An', '1991-06-14', '09324', 'user3@gmail.com', '2022-03-21', 'USER');
  INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (6,'user4','123456','Lê Anh Tuấn Tú', '1991-04-14', '09324', 'user4@gmail.com', '2022-03-21', 'USER');

  CREATE TABLE `app_intern_dhs`.`brands` (
    `id` 			    INT NOT NULL AUTO_INCREMENT,
    `name` 		    VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `app_intern_dhs`.`product` (
    `id` 			    INT NOT NULL AUTO_INCREMENT,
    `name` 		    VARCHAR(50) NOT NULL,
    `descripstion` 	LONGTEXT NULL,
    `price`           DOUBLE NULL,
    `image_path`      LONGTEXT NULL,
    `quantity_stored` 	    INT DEFAULT 0 NULL,
    `id_brand`      INT NOT NULL,
    `status` 		    VARCHAR(50) DEFAULT 'ON_SALE' NULL,
                      -- ON_SALE
                      -- OUT_OF_STOCK

    CONSTRAINT `id_brand_fk_pro`
    FOREIGN KEY (`id_brand`)
    REFERENCES `app_intern_dhs`.`brands` (`id`),
PRIMARY KEY (`id`));

  INSERT INTO `app_intern_dhs`.`brands` (`name`) VALUES ('Iphone');
  INSERT INTO `app_intern_dhs`.`brands` (`name`) VALUES ('Samsum');
  INSERT INTO `app_intern_dhs`.`brands` (`name`) VALUES ('Oppo');
  INSERT INTO `app_intern_dhs`.`brands` (`name`) VALUES ('Nokia');


  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 1','mo ta ve dien thoai 1','1000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '30', '1');
  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 2','mo ta ve dien thoai 2','2000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '33', '2');
  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 3','mo ta ve dien thoai 3','3000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '54', '3');
  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 4','mo ta ve dien thoai 4','4000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '32', '3');
  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 5','mo ta ve dien thoai 5','5000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '12', '3');
  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 6','mo ta ve dien thoai 6','6000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '6', '2');
  INSERT INTO `app_intern_dhs`.`product` (`name`, `descripstion`, `price`, `image_path`, `quantity_stored`, `id_brand`) VALUES ('dien thoai 7','mo ta ve dien thoai 7','7000', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg', '17', '3');


  -- CREATE TABLE `app_intern_dhs`.`brand_product` (
  --     `id_brand` INT NOT NULL,
  --     `id_product` INT NULL,

  --     CONSTRAINT `id_product_fk_bra`
  --     FOREIGN KEY (`id_product`)
  --     REFERENCES `app_intern_dhs`.`product` (`id`),
      
  --     CONSTRAINT `id_brand_fk_pro`
  --     FOREIGN KEY (`id_brand`)
  --     REFERENCES `app_intern_dhs`.`brands` (`id`)
  -- );

  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('1', '1');
  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('2', '2');
  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('3', '3');
  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('4', '4');
  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('1', '5');
  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('1', '6');
  -- INSERT INTO `app_intern_dhs`.`brand_product` (`id_brand`, `id_product`) VALUES ('2', '7');


  -- CREATE TABLE `app_intern_dhs`.`ticket` (
  --   `id` 			    INT NOT NULL AUTO_INCREMENT,
  --   `name` 		    VARCHAR(50) NOT NULL,
  --   `percent` 	    INT DEFAULT 0 NULL,
  --   `date_use` 	    datetime NULL DEFAULT CURRENT_TIMESTAMP,
  -- PRIMARY KEY (`id`));

  -- INSERT INTO `app_intern_dhs`.`ticket` (`name`, `percent`, `date_use`) VALUES ('ma giam gia 1', '10', '2022-04-15');
  -- INSERT INTO `app_intern_dhs`.`ticket` (`name`, `percent`, `date_use`) VALUES ('ma giam gia 2', '12', '2022-04-20');
  -- INSERT INTO `app_intern_dhs`.`ticket` (`name`, `percent`, `date_use`) VALUES ('ma giam gia 3', '15', '2022-04-25');
  -- INSERT INTO `app_intern_dhs`.`ticket` (`name`, `percent`, `date_use`) VALUES ('ma giam gia 4', '20', '2022-04-19');


  -- CREATE TABLE `app_intern_dhs`.`ticket_product` (
  --     `id_ticket` INT NOT NULL,
  --     `id_product` INT NULL,

  --     CONSTRAINT `id_product_fk_tic`
  --     FOREIGN KEY (`id_product`)
  --     REFERENCES `app_intern_dhs`.`product` (`id`),
      
  --     CONSTRAINT `id_ticket_fk_pro`
  --     FOREIGN KEY (`id_ticket`)
  --     REFERENCES `app_intern_dhs`.`ticket` (`id`)
  -- );

  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('1', '1');
  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('2', '2');
  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('3', '3');
  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('4', '4');
  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('1', '5');
  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('1', '6');
  -- INSERT INTO `app_intern_dhs`.`ticket_product` (`id_ticket`, `id_product`) VALUES ('4', '7');


  CREATE TABLE `app_intern_dhs`.`order_db` (
    `id` 			    INT NOT NULL AUTO_INCREMENT,
    `total_price`     DOUBLE DEFAULT 0 NULL,
    `created_date` 	datetime NULL DEFAULT CURRENT_TIMESTAMP,

    `id_user` INT NOT NULL,

    CONSTRAINT `id_user_fk_or`
    FOREIGN KEY (`id_user`)
    REFERENCES `app_intern_dhs`.`users` (`id`),
  PRIMARY KEY (`id`));

  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('14000', '2022-01-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('11000', '2022-01-08', '5');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('10000', '2022-02-07', '4');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('11000', '2022-02-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('5000', '2022-02-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('5000', '2022-02-09', '4');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('17000', '2022-02-07', '3');  
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('10000', '2022-02-07', '6');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('7000', '2022-03-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('5000', '2022-03-08', '6');  
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('6000', '2022-03-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('6000', '2022-03-08', '6');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('5000', '2022-04-09', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('4000', '2022-04-09', '5'); 
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('7000', '2022-04-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('9000', '2022-04-09', '4');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('5000', '2022-04-08', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('7000', '2022-04-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('6000', '2022-04-08', '4');  
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('4000', '2022-04-07', '3');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('3000', '2022-04-09', '4');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('2000', '2022-04-07', '5');
  INSERT INTO `app_intern_dhs`.`order_db` (`total_price`, `created_date`, `id_user`) VALUES ('1000', '2022-04-09', '6');


  CREATE TABLE `app_intern_dhs`.`order_detail` (
    `quantity` 	        INT DEFAULT 0 NULL,

    `id_order`            INT NOT NULL,
    `id_product`          INT NULL,

    CONSTRAINT `id_order_fk_or`
    FOREIGN KEY (`id_order`)
    REFERENCES `app_intern_dhs`.`order_db` (`id`),

    CONSTRAINT `id_product_fk_or`
    FOREIGN KEY (`id_product`)
    REFERENCES `app_intern_dhs`.`product` (`id`)
  );

  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '1', '1');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('2', '1', '5');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '1', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '2', '1');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('2', '2', '5');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '3', '4');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '3', '6');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('2', '4', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '4', '7');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '5', '5');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '6', '1');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '6', '4');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('3', '7', '5');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '7', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '8', '1');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '8', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '8', '6');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '9', '7');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '10', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('2', '10', '1');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '11', '1');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '11', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '11', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '12', '4');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '12', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '13', '5');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('2', '14', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '15', '7');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '16', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '16', '6');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '17', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '17', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '18', '7');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '19', '6');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '20', '4');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '21', '3');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '22', '2');
  INSERT INTO `app_intern_dhs`.`order_detail` (`quantity`, `id_order`, `id_product`) VALUES ('1', '23', '1');
