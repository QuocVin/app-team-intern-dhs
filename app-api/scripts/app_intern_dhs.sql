CREATE SCHEMA `app_intern_dhs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci ;

CREATE TABLE `app_intern_dhs`.`users` (
  `id` 				    INT NOT NULL AUTO_INCREMENT,
  `username` 		    VARCHAR(50) NOT NULL,
  `password` 		    VARCHAR(255) NOT NULL,
  `name` 			    VARCHAR(255) NOT NULL,
  `date_ob` 		    datetime NULL,
  `phone` 			    VARCHAR(20) NULL,
  `mail` 			    VARCHAR(50) NULL,
  `created_date` 	    datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `role_name` 		    VARCHAR(50) DEFAULT 'USER' NULL,
                -- USER, GUEST, MANAGER, ADMIN
PRIMARY KEY (`id`));

INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (1,'admin','123456','Trần Anh Tuấn', '1996-05-22', '0932411', 'admin@gmail.com', '2022-03-15', 'ADMIN');
INSERT INTO `app_intern_dhs`.`users` (`id`, `username`, `password`, `name`, `date_ob`, `phone`, `mail`, `created_date`, `role_name`) VALUES (1,'quanly1','123456','Nguyễn Tuấn A', '1991-10-14', '09324', 'mana@gmail.com', '2022-03-21', 'MANAGER');


CREATE TABLE `app_intern_dhs`.`product` (
  `id` 			    INT NOT NULL AUTO_INCREMENT,
  `name` 		    VARCHAR(50) NOT NULL,
  `descripstion` 	LONGTEXT NULL,
  `price`           DOUBLE NULL,
  `image_path`      LONGTEXT NULL,
  `status` 		    VARCHAR(50) DEFAULT 'ON_SALE' NULL,
                    -- ON_SALE
                    -- OUT_OF_STOCK
PRIMARY KEY (`id`));

CREATE TABLE `app_intern_dhs`.`brands` (
  `id` 			    INT NOT NULL AUTO_INCREMENT,
  `name` 		    VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`));

CREATE TABLE `app_intern_dhs`.`brand_product` (
    `id_brand` INT NOT NULL,
    `id_product` INT NULL,

    CONSTRAINT `id_product_fk_bra`
    FOREIGN KEY (`id_product`)
    REFERENCES `app_intern_dhs`.`product` (`id`),
    
    CONSTRAINT `id_brand_fk_pro`
    FOREIGN KEY (`id_brand`)
    REFERENCES `app_intern_dhs`.`brands` (`id`)
);

CREATE TABLE `app_intern_dhs`.`ticket` (
  `id` 			    INT NOT NULL AUTO_INCREMENT,
  `name` 		    VARCHAR(50) NOT NULL,
  `percent` 	    INT DEFAULT 0 NULL,
PRIMARY KEY (`id`));

CREATE TABLE `app_intern_dhs`.`ticket_product` (
    `id_ticket` INT NOT NULL,
    `id_product` INT NULL,

    CONSTRAINT `id_product_fk_tic`
    FOREIGN KEY (`id_product`)
    REFERENCES `app_intern_dhs`.`product` (`id`),
    
    CONSTRAINT `id_ticket_fk_pro`
    FOREIGN KEY (`id_ticket`)
    REFERENCES `app_intern_dhs`.`ticket` (`id`)
);

CREATE TABLE `app_intern_dhs`.`store` (
  `id` 			    INT NOT NULL AUTO_INCREMENT,
  `quantity` 	    INT DEFAULT 0 NULL,
  `id_product`      INT NULL,

   CONSTRAINT `id_product_fk_sto`
   FOREIGN KEY (`id_product`)
   REFERENCES `app_intern_dhs`.`product` (`id`),
PRIMARY KEY (`id`));

CREATE TABLE `app_intern_dhs`.`order` (
  `id` 			    INT NOT NULL AUTO_INCREMENT,
  `total_price`     DOUBLE DEFAULT 0 NULL,
  `created_date` 	datetime NULL DEFAULT CURRENT_TIMESTAMP,

  `id_user` INT NOT NULL,

   CONSTRAINT `id_user_fk_or`
   FOREIGN KEY (`id_user`)
   REFERENCES `app_intern_dhs`.`users` (`id`),
PRIMARY KEY (`id`));

CREATE TABLE `app_intern_dhs`.`order_detail` (
  `quantity` 	        INT DEFAULT 0 NULL,
  `price_products`      DOUBLE DEFAULT 0 NULL,

  `id_order`            INT NOT NULL,
  `id_product`          INT NULL,

   CONSTRAINT `id_order_fk_or`
   FOREIGN KEY (`id_order`)
   REFERENCES `app_intern_dhs`.`order` (`id`),

   CONSTRAINT `id_product_fk_or`
   FOREIGN KEY (`id_product`)
   REFERENCES `app_intern_dhs`.`product` (`id`)
);





  
