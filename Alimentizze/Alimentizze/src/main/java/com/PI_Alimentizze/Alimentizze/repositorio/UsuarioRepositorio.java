package com.PI_Alimentizze.Alimentizze.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PI_Alimentizze.Alimentizze.modelo.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>{
	
	/**** Metodo utilizado para selecionar apenas um Usuario pelo email (Chave unica)
	 * 
	 * @param email
	 * @return Optional com Usuario unico
	 * @since 1.0
	 * @author Projeto Alimentizze
 *
 *
 */

	public Optional<Usuario> findByEmail (String email);
	
	
	/** * Metodo utilizado para pesquisar coluna nomeCompleto da tabela Usuario
	 * 
	 * @param nomeCompleto
	 * @return Lista de Usuario
	 * @since 1.0
	 * @author Projeto Alimentizze
	 */

	
	List<Usuario> findByNomeCompletoContainingIgnoreCase (String nomeCompleto);
	
	
	
	
	
	

}
