import { Pessoa } from "./Pessoa";
import fs from "fs";

export class Membro extends Pessoa {
  protected _matricula = "";

  constructor(
    nome: string = "",
    matricula: string = "",
    endereco: string = "",
    telefone: string = ""
  ) {
    super();
    this._nome = nome;
    this._matricula = matricula;
    this._endereco = endereco;
    this._telefone = telefone;
  }

  public adicionar(): void {
    fs.writeFileSync(
      "./data/membros.txt",
      `${this._matricula}, ${this._nome}, ${this._endereco}, ${this._telefone}`
    );
  }

  public atualizar(): void {}

  public deletar(): void {}

  // public alugarLivro(
  //   ISBN?: string,
  //   titulo: string,
  //   dataEmprestimo: string,
  //   dataDevolucao: string
  // ): void {}
}
