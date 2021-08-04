package com.PI_Alimentizze.Alimentizze.controle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PI_Alimentizze.Alimentizze.modelo.Postagem;
import com.PI_Alimentizze.Alimentizze.repositorio.PostagemRepositorio;

	@RestController
	@RequestMapping("/Postagem")
	@CrossOrigin("*")
	public class PostagemControle {

		@Autowired
		private PostagemRepositorio repository;

		@GetMapping
		public ResponseEntity<List<Postagem>> GetAll() {
			return ResponseEntity.status(200).body(repository.findAll());
		}
		
		@GetMapping("/{id}")
		public ResponseEntity<Postagem> GetById(@PathVariable Long id) {
			return repository.findById(id).map(resp -> ResponseEntity.status(200).body(resp))
					.orElse(ResponseEntity.status(404).build());
		}
		
		@GetMapping("/titulo/{titulo}")
		public ResponseEntity<List<Postagem>> GetBy(@PathVariable String titulo) {
			return ResponseEntity.ok(repository.findAllByTituloContainingIgnoreCase(titulo));
		}
		
		@PostMapping
		public ResponseEntity<Postagem> post(@RequestBody Postagem titulo) {
			return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(titulo));
		}

		@PutMapping 
		public ResponseEntity<Postagem> put(@RequestBody Postagem titulo){
			return ResponseEntity.status(HttpStatus.OK).body(repository.save(titulo));
			
		}

		@DeleteMapping("/{id}")
		public void delete(@PathVariable Long id) {
			repository.deleteById(id);
		}
		
}
