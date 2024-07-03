import fs from "fs";
import Prompt from "prompt-sync";


export class Membro {
  protected _nome: string;
  protected _endereco: string = "";
  protected _CPF: string = "0000000000000"; 
  protected _telefone: number = 0;

  constructor(nome: string, endereco: string, CPF: string, telefone: number) {
    this._nome = nome;
    this._endereco = endereco;
    this._CPF = CPF;
    this._telefone = telefone;
  }

  public adicionar(): void {
    const membroData = {
      nome: this._nome,
      endereco: this._endereco,
      CPF: this._CPF,
      telefone: this._telefone,
    };

    let membros = []
    if (fs.existsSync("./data/membros.json")) {
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      membros = JSON.parse(data);
    }
    membros.push(membroData);

    fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2))

  }

  public atualizar(): void{
    let key = Prompt();
    let CPF = key("Digite o CPF do membro que deseja atualizar: ");


    if (fs.existsSync("./data/membros.json")) {
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      const membros = JSON.parse(data);
      let membro = membros.find((membro: any) => membro.CPF == CPF);

      if(membro){
        let nome = key("Nome: ");
        let endereco = key("endereco: ");
        let CPF = key("CPF: ");
        let telefone = key("telefone: ");

        membro.nome = nome;
        membro.endereco = endereco;
        membro.CPF = CPF;
        membro.telefone = telefone;

        fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2))
      } else {
        console.log("membro não encontrado!")
      }
    }
    
  }

  public listar(): void {
    if (fs.existsSync("./data/membros.json")) {
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      const membros = JSON.parse(data);
      console.table(membros)
    } else {
      console.log("Arquivo não encontrado!")
    }
  
  }

  public deletar(): void {
    if (fs.existsSync("./data/membros.json")){
      let key = Prompt();
      let CPF = key("Digite o CPF do membro que deseja deletar: ");
      const data = fs.readFileSync("./data/membros.json", "utf-8");
      let membros = JSON.parse(data);
      let membro = membros.find((membro: any) => membro.CPF == CPF);
      if(membro){
        let index = membros.indexOf(membro);
        membros.splice(index, 1);
        fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2))
      } else {
        console.log("membro não encontrado!")
      }
    }
  }
}






















// import { Pessoa } from "./Pessoa";
// import fs from "fs";
// import Prompt from "prompt-sync";

// export class Membro extends Pessoa {
//   protected _CPF = "";

//   constructor(
//     nome: string = "",
//     CPF: string = "",
//     endereco: string = "",
//     CPF: string = ""
//   ) {
//     super();
//     this._nome = nome;
//     this._CPF = CPF;
//     this._endereco = endereco;
//     this._CPF = CPF;
//   }

//   public adicionar(): void {   const membroData = {
//     nome: this._nome,
//     endereco: this._endereco,
//     CPF: this._CPF,
//     CPF: this._CPF,
//   };

//   let membros = []
//   if (fs.existsSync("./data/membros.json")) {
//     const data = fs.readFileSync("./data/membros.json", "utf-8");
//     membros = JSON.parse(data);
//   }
//   membros.push(membroData);

//   fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2))

//   }

//   public atualizar(): void {
//     let key = Prompt();
//     let CPF = key("Digite a CPF do membro que deseja atualizar: ");


//     if (fs.existsSync("./data/membros.json")) {
//       const data = fs.readFileSync("./data/membros.json", "utf-8");
//       const membros = JSON.parse(data);
//       let membro = membros.find((membro: any) => membro.CPF == CPF);

//       if(membro){
//         let nome = key("Título: ");
//         let endereco = key("endereco: ");
//         let CPF = key("CPF: ");
//         let CPF = key("CPF: ");

//         membro.nome = nome;
//         membro.endereco = endereco;
//         membro.CPF = CPF;
//         membro.CPF = CPF;

//         fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2))
//       } else {
//         console.log("membro não encontrado!")
//       }
//     }
//     }

//     public listar(): void {
//       if (fs.existsSync("./data/membros.json")) {
//         const data = fs.readFileSync("./data/membros.json", "utf-8");
//         const membros = JSON.parse(data);
//         console.table(membros)
//       } else {
//         console.log("Membro não encontrado!")
//       }
    
//     }

//   public deletar(): void {
//     if (fs.existsSync("./data/membros.json")){
//       let key = Prompt();
//       let CPF = key("Digite o CPF do membro que deseja deletar: ");
//       const data = fs.readFileSync("./data/membros.json", "utf-8");
//       let membros = JSON.parse(data);
//       let membro = membros.find((membro: any) => membro.CPF == CPF);
//       if(membro){
//         let index = membros.indexOf(membro);
//         membros.splice(index, 1);
//         fs.writeFileSync("./data/membros.json", JSON.stringify(membros, null, 2))
//       } else {
//         console.log("membro não encontrado!")
//       }
//     }
//   }

  
//   // public alugarmembro(
//   //   CPF?: string,
//   //   nome: string,
//   //   dataEmprestimo: string,
//   //   dataDevolucao: string
//   // ): void {}

  
// }

