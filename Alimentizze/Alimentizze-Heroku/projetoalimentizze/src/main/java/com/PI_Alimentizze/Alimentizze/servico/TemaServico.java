package com.PI_Alimentizze.Alimentizze.servico;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PI_Alimentizze.Alimentizze.modelo.Tema;
import com.PI_Alimentizze.Alimentizze.repositorio.TemaRepositorio;

@Service
public class TemaServico {

	private @Autowired TemaRepositorio repositorioT;

	/**
	 * Método utilizado para alterar um tema. O mesmo retorna um Optional com Tema
	 * caso correto ou um Optional.empyt() caso id do tema não exista.
	 * 
	 * @param temaParaAlterar do tipo Tema
	 * @return Optional com Tema alterado
	 * @since 1.0
	 * @author Projeto Alimentizze
	 */
	public Optional<Tema> alterarTema(Tema temaParaAlterar) {
		return repositorioT.findById(temaParaAlterar.getId()).map(temaExistente -> {
			temaExistente.setCategoria(temaParaAlterar.getCategoria());
			return Optional.ofNullable(repositorioT.save(temaExistente));
		}).orElseGet(() -> {
			return Optional.empty();
		});
	}
}


