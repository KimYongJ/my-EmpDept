// EMP 테이블과 DEPT 테이블을 프론트와 연동한 것, 
package com.example.demo.com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


// 부트에서는 파일들을 다 지정을 해주어야 실행이 제대로 된다. 
@EntityScan(basePackages = {"com.example.model"})
@EnableJpaRepositories(basePackages = {"com.example.repository"})
@ComponentScan(basePackages = {"com.example.service", "com.example.controller"})
@SpringBootApplication
public class Step13BootBasicApplication {
	public static void main(String[] args) {
		SpringApplication.run(Step13BootBasicApplication.class, args);
	}
}