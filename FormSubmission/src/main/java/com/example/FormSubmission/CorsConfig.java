package com.example.FormSubmission;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

	@Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        // Set up CORS configuration
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.addAllowedOrigin("http://127.0.0.1:5500"); // Allow your frontend origin
        corsConfig.addAllowedMethod("*"); // Allow all HTTP methods (GET, POST, etc.)
        corsConfig.addAllowedHeader("*"); // Allow all headers
        corsConfig.setAllowCredentials(true); // Allow cookies

        // Set up the URL-based source with the CORS configuration
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", corsConfig); // Apply to /api/** endpoints

        // Create and return the CorsFilter
        CorsFilter corsFilter = new CorsFilter(source);

        // Create and configure the FilterRegistrationBean
        FilterRegistrationBean<CorsFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(corsFilter);
        registrationBean.addUrlPatterns("/api/*"); // Apply to all API endpoints
        registrationBean.setOrder(0); // Ensure the filter runs first
        return registrationBean;
}
}

