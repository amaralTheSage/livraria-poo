import fs from "fs";
import Prompt from "prompt-sync";
import { Pessoa } from "./Pessoa";


export class Livro {
  protected _titulo: string;
  protected _autor: string = "";
  protected _ISBN: string = "0000000000000"; //'000-0-00-000000-0'
  protected _ano: number = 0;

  constructor(titulo: string, autor: string, ISBN: string, ano: number) {
    this._titulo = titulo;
    this._autor = autor;
    this._ISBN = ISBN;
    this._ano = ano;
  }

  public adicionar(): void {
    const livroData = {
      titulo: this._titulo,
      autor: this._autor,
      ISBN: this._ISBN,
      ano: this._ano,
    };

    let livros = []
    if (fs.existsSync("./data/livros.json")) {
      const data = fs.readFileSync("./data/livros.json", "utf-8");
      livros = JSON.parse(data);
    }
    livros.push(livroData);

    fs.writeFileSync("./data/livros.json", JSON.stringify(livros, null, 2))

  }

  public atualizar(): void{
    let key = Prompt();
    let ISBN = key("Digite o ISBN do livro que deseja atualizar: ");


    if (fs.existsSync("./data/livros.json")) {
      const data = fs.readFileSync("./data/livros.json", "utf-8");
      const livros = JSON.parse(data);
      let livro = livros.find((livro: any) => livro.ISBN == ISBN);

      if(livro){
        let titulo = key("Título: ");
        let autor = key("Autor: ");
        let ISBN = key("ISBN: ");
        let ano = key("Ano: ");

        livro.titulo = titulo;
        livro.autor = autor;
        livro.ISBN = ISBN;
        livro.ano = ano;

        fs.writeFileSync("./data/livros.json", JSON.stringify(livros, null, 2))
      } else {
        console.log("Livro não encontrado!")
      }
    }
    
  }

  public listar(): void {
    if (fs.existsSync("./data/livros.json")) {
      const data = fs.readFileSync("./data/livros.json", "utf-8");
      const livros = JSON.parse(data);
      console.table(livros)
    } else {
      console.log("Arquivo não encontrado!")
    }
  
  }

  public deletar(): void {}
}
