package com.PI_Alimentizze.Alimentizze.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PI_Alimentizze.Alimentizze.modelo.Postagem;

public interface PostagemRepositorio extends JpaRepository<Postagem, Long> {
	public List<Postagem> findAllByTituloContainingIgnoreCase (String titulo);



}
