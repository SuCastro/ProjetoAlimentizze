package com.PI_Alimentizze.Alimentizze.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PI_Alimentizze.Alimentizze.modelo.Tema;






@Repository
public interface TemaRepositorio extends JpaRepository<Tema, Long> {
	public List<Tema> findAllByCategoriaContainingIgnoreCase (String categoria);
}
