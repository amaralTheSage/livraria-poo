import { Pessoa } from "./Pessoa";

export class Membro extends Pessoa {
  protected _matricula = "";

  constructor(
    nome: string,
    matricula: string,
    endereco: string,
    telefone: string
  ) {
    super();
    this._nome = nome;
    this._matricula = matricula;
    this._endereco = endereco;
    this._telefone = telefone;
  }

  public alugarLivro(
    ISBN?: string,
    titulo: string,
    dataEmprestimo: string,
    dataDevolucao: string
  ): void {}
}
