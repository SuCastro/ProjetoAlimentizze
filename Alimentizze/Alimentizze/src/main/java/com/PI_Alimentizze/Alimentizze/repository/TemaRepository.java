package com.PI_Alimentizze.Alimentizze.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.PI_Alimentizze.Alimentizze.modelo.Tema;



@Repository
public interface TemaRepository extends JpaRepository<Tema, Long>{
	
	
	public List<Tema> findAllByCategoriaContainigIgnoreCase (String categoria);
	
	

}
