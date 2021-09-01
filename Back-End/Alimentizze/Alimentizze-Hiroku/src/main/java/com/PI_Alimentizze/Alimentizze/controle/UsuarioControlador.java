package com.PI_Alimentizze.Alimentizze.controle;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PI_Alimentizze.Alimentizze.modelo.Usuario;
import com.PI_Alimentizze.Alimentizze.modelo.UsuarioDTO;
import com.PI_Alimentizze.Alimentizze.repositorio.UsuarioRepositorio;
import com.PI_Alimentizze.Alimentizze.servico.UsuarioServico;

@RestController
@RequestMapping("/usuario")
public class UsuarioControlador {
	
	
		@Autowired
		private UsuarioRepositorio repositorio;

		@Autowired
		private UsuarioServico servicos;

		@PostMapping("/salvar")
		public ResponseEntity<Object> cadastrarUsuario(@Valid @RequestBody Usuario novoUsuario) {
			Optional<Object> objetoCadastrado = servicos.cadastrarUsuario(novoUsuario);

			if (objetoCadastrado.isPresent()) {
				return ResponseEntity.status(201).body(objetoCadastrado.get());
			} else {
				return ResponseEntity.status(400).build();
			}

		}
		
		@PutMapping("/autenticar")
		public ResponseEntity<Object> pegarCredenciais(@Valid @RequestBody UsuarioDTO loginSenha) {
			Optional<?> objetoCredenciado = servicos.pegarCredenciais(loginSenha);

			if (objetoCredenciado.isPresent()) {
				return ResponseEntity.status(201).body(objetoCredenciado.get());
			} else {
				return ResponseEntity.status(400).build();
			}
			
		}
		@GetMapping("/todes")
		public ResponseEntity<Object> buscarTodes() {
			List<Usuario> listaUsuarios = repositorio.findAll();
			
			if (listaUsuarios.isEmpty()) {
				return ResponseEntity.status(204).build();
			} else {
				return ResponseEntity.status(200).body(listaUsuarios);
			}
			
		}

		@GetMapping("/{id}")
		public ResponseEntity<Usuario> buscarPorId(@PathVariable(value = "id") Long id) {
			return ResponseEntity.status(200).body(repositorio.findById(id).get());
		}

		@GetMapping("/pesquisa")
		public ResponseEntity<List<Usuario>> buscarPorNome(@RequestParam(defaultValue = "") String nomeCompleto) {
			return ResponseEntity.status(200).body(repositorio.findByNomeCompletoContainingIgnoreCase(nomeCompleto));
		}
		
		
		@DeleteMapping("/deletar/{idUsuario}")
		public ResponseEntity<String> deletarPorId(@PathVariable Long idUsuario) {
			Optional<Usuario> usuarioExistente = repositorio.findById(idUsuario);
			if (usuarioExistente.isPresent()) {
				repositorio.deleteById(idUsuario);
				return ResponseEntity.status(200).build();
			} else {
				return ResponseEntity.status(400).build();
			}
			
		}

	}



