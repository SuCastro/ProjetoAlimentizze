package com.PI_Alimentizze.Alimentizze.servico;

import java.nio.charset.Charset;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.PI_Alimentizze.Alimentizze.modelo.Usuario;
import com.PI_Alimentizze.Alimentizze.modelo.UsuarioDTO;
import com.PI_Alimentizze.Alimentizze.repositorio.UsuarioRepositorio;
import org.apache.commons.codec.binary.Base64;


@Service
public class UsuarioServico {

	@Autowired 
     private UsuarioRepositorio repositorio;
	
	/**
	 * Método utilizado para cadastrar um usuario no banco de dados, o mesmo é
	 * responsavel por retornar vazio caso Usuario exista
	 * 
	 * @param novoUsuario do tipo Usuario
	 * @return Usuario Criado quando não existir no banco
	 * @since 1.0
	 * @author Projeto Alimentizze
	 */
	
	public Optional<Object> cadastrarUsuario(Usuario novoUsuario) {
		return repositorio.findByEmail(novoUsuario.getEmail()).map(usuarioExistente -> {
			return Optional.empty();
		}).orElseGet(() -> {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String senhaCriptografada = encoder.encode(novoUsuario.getSenha());
			novoUsuario.setSenha(senhaCriptografada);
			return Optional.ofNullable(repositorio.save(novoUsuario));
		});
	}

	public Optional<?> pegarCredenciais(UsuarioDTO usuarioParaAutenticar) {
		return repositorio.findByEmail(usuarioParaAutenticar.getEmail()).map(usuarioExistente -> {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

			if (encoder.matches(usuarioParaAutenticar.getSenha(), usuarioExistente.getSenha())) {
				String estruturaBasic = usuarioParaAutenticar.getEmail() + ":" + usuarioParaAutenticar.getSenha(); 
				byte[] autorizacaoBase64 = Base64.encodeBase64(estruturaBasic.getBytes(Charset.forName("US-ASCII"))); 
				String autorizacaoHeader = "Basic " + new String(autorizacaoBase64); 

				usuarioParaAutenticar.setToken(autorizacaoHeader);
				usuarioParaAutenticar.setId(usuarioExistente.getId());
				usuarioParaAutenticar.setNomeCompleto(usuarioExistente.getNomeCompleto());
				usuarioParaAutenticar.setTipoDeUsuario(usuarioExistente.getTipoDeUsuario());
				usuarioParaAutenticar.setSenha(usuarioExistente.getSenha());
				return Optional.ofNullable(usuarioParaAutenticar);
			} else {
				return Optional.empty();}
		});
	
		}
}

