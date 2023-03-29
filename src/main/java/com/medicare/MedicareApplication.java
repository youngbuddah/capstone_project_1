package com.medicare;




import java.util.Collections;
import java.util.Map;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Bean;


import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2

public class MedicareApplication {

	public static void main(String[] args) {
		  SpringApplication app = new SpringApplication(MedicareApplication.class);
	        app.setDefaultProperties(Collections
	          .singletonMap("server.port", "9090"));
	        app.run(args);
		 	
	
	}
	@Bean
    public Docket User() { 
        return new Docket(DocumentationType.SWAGGER_2)  
          .select()                                  
          .apis(RequestHandlerSelectors.basePackage("com.medicare"))                                     
          .build(); 
	}
}
