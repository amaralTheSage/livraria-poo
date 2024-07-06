import fs from "fs";
import Prompt from "prompt-sync";
import { Membro } from "./Membro";
import { Livro } from "./Livro";

const prompt = Prompt();

export class Emprestimo {
  private _membro: Membro;
  private _livro: Livro;
  private _dataEmprestimo: string;
  private _dataDevolucao: string;

  constructor(membro: Membro, livro: Livro, dataEmprestimo: string, dataDevolucao: string) {
    this._membro = membro;
    this._livro = livro;
    this._dataEmprestimo = dataEmprestimo;
    this._dataDevolucao = dataDevolucao;
  }

  private static carregarDados(filepath: string): any[] {
    if (fs.existsSync(filepath)) {
      const data = fs.readFileSync(filepath, "utf-8");
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  public adicionar(): void {
    const membros = Emprestimo.carregarDados("./data/membros.json");
    const livros = Emprestimo.carregarDados("./data/livros.json");

    const membroExiste = membros.some((membro: Membro) => membro.cpf == this._membro.cpf);
    const livroExiste = livros.some((livro: Livro) => livro.ISBN == this._livro.ISBN);


    if (!membroExiste) {
      console.log("Membro não encontrado!");
      return;
    }

    if (!livroExiste) {
      console.log("Livro não encontrado!");
      return;
    }

    const emprestimoData = {
      cpfMembro: this._membro.cpf,
      ISBN_livro: this._livro.ISBN,
      dataEmprestimo: this._dataEmprestimo,
      dataDevolucao: this._dataDevolucao,
    };

    let emprestimos = Emprestimo.carregarDados("./data/emprestimos.json");

    emprestimos.push(emprestimoData);
    fs.writeFileSync("./data/emprestimos.json", JSON.stringify(emprestimos, null, 2));

    console.log("Empréstimo adicionado com sucesso!");
  }

  public listar(): void {
    if (fs.existsSync("./data/emprestimos.json")) {
      const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
      const emprestimos = JSON.parse(data);

      console.table(emprestimos);
    } else {
      console.log("Arquivo de empréstimos não encontrado!");
    }
  }

  public devolver(): void {
    const CPF = prompt("Digite o CPF do membro que deseja devolver o livro: ");
    const ISBN = prompt("Digite o ISBN do livro que deseja devolver: ");

    if (fs.existsSync("./data/emprestimos.json")) {
      const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
      let emprestimos = JSON.parse(data);

      let emprestimo = emprestimos.find(
        (e: any) => e.cpfMembro === CPF && e.ISBN_livro === ISBN
      );

      if (emprestimo) {
        let index = emprestimos.indexOf(emprestimo);
        emprestimos.splice(index, 1);
        fs.writeFileSync("./data/emprestimos.json", JSON.stringify(emprestimos, null, 2));
        console.log("Livro devolvido com sucesso!");
      } else {
        console.log("Empréstimo não encontrado!");
      }
    } else {
      console.log("Arquivo de empréstimos não encontrado!");
    }
  }
}
