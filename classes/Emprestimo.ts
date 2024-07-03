import fs from "fs";
import Prompt from "prompt-sync";
import { Membro } from "./Membro";
import { Livro } from "./Livro";

export class Emprestimo {
  protected _membro: Membro;
  protected _livro: Livro;
  protected _dataEmprestimo: string;
  protected _dataDevolucao: string;

  constructor(membro: Membro, livro: Livro, dataEmprestimo: string, dataDevolucao: string) {
    this._membro = membro;
    this._livro = livro;
    this._dataEmprestimo = dataEmprestimo;
    this._dataDevolucao = dataDevolucao;
  }

  public adicionar(): void {
    const emprestimoData = {
      membro: this._membro,
      livro: this._livro,
      dataEmprestimo: this._dataEmprestimo,
      dataDevolucao: this._dataDevolucao,
    };

    let emprestimos = [];
    if (fs.existsSync("./data/emprestimos.json")) {
      const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
      emprestimos = JSON.parse(data);
    }

    emprestimos.push(emprestimoData);
    fs.writeFileSync("./data/emprestimos.json", JSON.stringify(emprestimos, null, 2));
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
    let key = Prompt();
    let CPF = key("Digite o CPF do membro que deseja devolver o livro: ");
    let ISBN = key("Digite o ISBN do livro que deseja devolver: ");

    if (fs.existsSync("./data/emprestimos.json")) {
      const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
      let emprestimos = JSON.parse(data);
      let emprestimo = emprestimos.find(
        (e: any) => e.membro.CPF === CPF && e.livro.ISBN === ISBN
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





// import fs from "fs";
// import Prompt from "prompt-sync";
// import { Membro } from "./Membro";
// import { Livro } from "./Livro";

// export class Emprestimo {
//   protected _membro: Membro;
//   protected _livro: Livro;
//   protected _dataEmprestimo: string;
//   protected _dataDevolucao: string;

//   constructor(membro: Membro, livro: Livro, dataEmprestimo: string, dataDevolucao: string) {
//     this._membro = membro;
//     this._livro = livro;
//     this._dataEmprestimo = dataEmprestimo;
//     this._dataDevolucao = dataDevolucao;
//   }

//   public adicionar(): void {
//     const emprestimoData = {
//       membro: this._membro,
//       livro: this._livro,
//       dataEmprestimo: this._dataEmprestimo,
//       dataDevolucao: this._dataDevolucao,
//     };

//     let emprestimos = [];
//     if (fs.existsSync("./data/emprestimos.json")) {
//       const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
//       emprestimos = JSON.parse(data);
//     }

//     emprestimos.push(emprestimoData);
//     fs.writeFileSync("./data/emprestimos.json", JSON.stringify(emprestimos, null, 2));
//   }

//   public listar(): void {
//     if (fs.existsSync("./data/emprestimos.json")) {
//       const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
//       const emprestimos = JSON.parse(data);
//       console.table(emprestimos);
//     } else {
//       console.log("Arquivo de empréstimos não encontrado!");
//     }
//   }

//   public devolver(): void {
//     let key = Prompt();
//     let CPF = key("Digite o CPF do membro que deseja devolver o livro: ");
//     let ISBN = key("Digite o ISBN do livro que deseja devolver: ");

//     if (fs.existsSync("./data/emprestimos.json")) {
//       const data = fs.readFileSync("./data/emprestimos.json", "utf-8");
//       let emprestimos = JSON.parse(data);
//       let emprestimo = emprestimos.find(
//         (e: any) => e.membro.CPF === CPF && e.livro.ISBN === ISBN
//       );

//       if (emprestimo) {
//         let index = emprestimos.indexOf(emprestimo);
//         emprestimos.splice(index, 1);
//         fs.writeFileSync("./data/emprestimos.json", JSON.stringify(emprestimos, null, 2));
//         console.log("Livro devolvido com sucesso!");
//       } else {
//         console.log("Empréstimo não encontrado!");
//       }
//     } else {
//       console.log("Arquivo de empréstimos não encontrado!");
//     }
//   }
// }