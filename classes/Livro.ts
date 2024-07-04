import fs from "fs";
import Prompt from "prompt-sync";

const prompt = Prompt();

export class Livro {
  private _titulo: string;
  private _autor: string = "";
  private _ISBN: string = "0000000000000"; //'000-0-00-000000-0'
  private _ano: number = 0;

  constructor(titulo: string, autor: string, ISBN: string, ano: number) {
    this._titulo = titulo;
    this._autor = autor;
    this._ISBN = ISBN;
    this._ano = ano;
  }

  get isbn(): string {
    return this._ISBN;
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

    let ISBN = prompt("Digite o ISBN do livro que deseja atualizar: ");


    if (fs.existsSync("./data/livros.json")) {
      const data = fs.readFileSync("./data/livros.json", "utf-8");
      const livros = JSON.parse(data);
      let livro = livros.find((livro: any) => livro.ISBN == ISBN);

      if(livro){
        let titulo = prompt("Título: ");
        let autor = prompt("Autor: ");
        let ISBN = prompt("ISBN: ");
        let ano = prompt("Ano: ");

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

  public deletar(): void {
    if (fs.existsSync("./data/livros.json")){
      
      let ISBN = prompt("Digite o ISBN do livro que deseja deletar: ");
      const data = fs.readFileSync("./data/livros.json", "utf-8");
      let livros = JSON.parse(data);
      let livro = livros.find((livro: any) => livro.ISBN == ISBN);
      if(livro){
        let index = livros.indexOf(livro);
        livros.splice(index, 1);
        fs.writeFileSync("./data/livros.json", JSON.stringify(livros, null, 2))
      } else {
        console.log("Livro não encontrado!")
      }
    }
  }
}
