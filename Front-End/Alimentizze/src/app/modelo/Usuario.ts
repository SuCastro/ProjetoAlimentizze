import { Postagem } from "./Postagem"

export class Usuario{

    public id: number
    public email: string
    public foto: string
    public nomeCompleto: string
    public tipoDeUsuario: string
    public senha:string
    public minhasPostagens: Postagem[]

}
