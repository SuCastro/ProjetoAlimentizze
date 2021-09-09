package com.PI_Alimentizze.Alimentizze.seguranca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {
	
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth)
	throws Exception {
	auth.userDetailsService(userDetailsService);
	/*
	 * condicao de autorizacao no swegger
	auth.inMemoryAuthentication()
	.withUser("root")
	.password(passwordEncoder().encode("sofia-2013"))
	.authorities("ROLE_USER");*/
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http.authorizeRequests()
		.antMatchers("/**").permitAll() 
		.antMatchers("/usuario/logar").permitAll()
		.antMatchers("/usuario/autenticar").permitAll()
		.antMatchers(HttpMethod.GET ,"/postagens").permitAll()
		.antMatchers(HttpMethod.GET ,"/tema").permitAll()
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable();
		
		/* atualizado
		http.authorizeRequests()
		.antMatchers(HttpMethod.POST,"/usuarios/logar").permitAll()
		.antMatchers(HttpMethod.POST,"/usuarios/cadastrar").permitAll()
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable(); */
		
	}

}
