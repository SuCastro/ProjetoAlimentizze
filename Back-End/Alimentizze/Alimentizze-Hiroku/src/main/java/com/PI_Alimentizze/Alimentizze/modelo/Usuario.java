package com.PI_Alimentizze.Alimentizze.modelo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table( name = "Usuario")
public class Usuario
{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message = "obrigatório nome completo")
	private String nomeCompleto;
	
	
	@Email(message = "obrigatório email")
	private String email;
	
	
	@NotBlank
	@Size (min = 5, max = 100, message = "minimo 5 caracteres")
	private String senha;
	
	
	@NotBlank (message = "obrigatório um tipo de usuario")
	private String tipoDeUsuario;
	
	private String foto;

	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties({"usuario"})
	private List<Postagem> minhasPostagens = new ArrayList<>();


	
	public Long getId()
	{
		return id;
	}


	public void setId(Long id)
	{
		this.id = id;
	}


	public String getNomeCompleto()
	{
		return nomeCompleto;
	}


	public void setNomeCompleto(String nomeCompleto)
	{
		this.nomeCompleto = nomeCompleto;
	}


	public String getEmail()
	{
		return email;
	}


	public void setEmail(String email)
	{
		this.email = email;
	}


	public String getSenha()
	{
		return senha;
	}


	public void setSenha(String senha)
	{
		this.senha = senha;
	}


	public String getTipoDeUsuario()
	{
		return tipoDeUsuario;
	}


	public void setTipoDeUsuario(String tipoDeUsuario)
	{
		this.tipoDeUsuario = tipoDeUsuario;
	}


	public String getFoto() {
		return foto;
	}


	public void setFoto(String foto) {
		this.foto = foto;
	}


	public List<Postagem> getMinhasPostagens() {
		return minhasPostagens;
	}


	public void setMinhasPostagens(List<Postagem> minhasPostagens) {
		this.minhasPostagens = minhasPostagens;
	}
	 
	
}
