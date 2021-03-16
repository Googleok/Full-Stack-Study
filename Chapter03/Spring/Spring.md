vscode 에서 프로젝트 생성시 pom.xml 에 artifactId 겹치면 JAVA PROJECTS에서 인식을 못한다.

# spring-boot 플젝 실행

mvn spring-boot:run

# mysql

- user 생성
  create user jepark@localhost identified by '1234';

- 권한 부여
  grant all privileges on _._ to jepark@localhost identified by '1234' with grant option;

- app_messages DB 사용 권한 부여
  show databases;
  use app_messages;
  ALTER USER 'jepark'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

- messages 테이블 생성
  use app_messages;
  DROP TABLE IF EXISTS `messages`;
  CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(128) COLLATE utf8_bin NOT NULL DEFAULT '',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
