import fs from "fs";
import Prompt from "prompt-sync";

const prompt = Prompt();

export class Membro {
  private _nome: string;
  private _endereco: string;
  private _cpf: string;
  private _telefone: string;

  constructor(nome: string, endereco: string, cpf: string, telefone: string) {
    this._nome = nome;
    this._endereco = endereco;
    this._cpf = cpf;
    this._telefone = telefone;
  }

  get cpf(): string {
    return this._cpf;
  }

  public adicionar(): void {
    const membroData = {
      nome: this._nome,
      endereco: this._endereco,
      cpf: this._cpf,
      telefone: this._telefone,
    };

    let membros = [];
    if (fs.existsSync("./data/membros.json")) {
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      membros = JSON.parse(data);
    }
    membros.push(membroData);

    fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2));
    console.log("Membro adicionado com sucesso!");
  }

  public atualizar(): void {
    const cpf = prompt("Digite o CPF do membro que deseja atualizar: ");

    if (fs.existsSync("./data/membros.json")) {
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      const membros = JSON.parse(data);
      let membro = membros.find((membro: any) => membro.cpf === cpf);

      if (membro) {
        membro.nome = prompt("Nome: ");
        membro.endereco = prompt("Endereço: ");
        membro.cpf = prompt("CPF: ");
        membro.telefone = prompt("Telefone: ");

        fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2));
        console.log("Membro atualizado com sucesso!");
      } else {
        console.log("Membro não encontrado!");
      }
    } else {
      console.log("Arquivo de membros não encontrado!");
    }
  }

  public listar(): void {
    if (fs.existsSync("./data/membros.json")) {
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      const membros = JSON.parse(data);
      console.table(membros);
    } else {
      console.log("Arquivo de membros não encontrado!");
    }
  }

  public deletar(): void {
    if (fs.existsSync("./data/membros.json")) {
      const cpf = prompt("Digite o CPF do membro que deseja deletar: ");
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      let membros = JSON.parse(data);
      let membro = membros.find((membro: any) => membro.cpf === cpf);

      if (membro) {
        let index = membros.indexOf(membro);
        membros.splice(index, 1);
        fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2));
        console.log("Membro deletado com sucesso!");
      } else {
        console.log("Membro não encontrado!");
      }
    } else {
      console.log("Arquivo de membros não encontrado!");
    }
  }
}
