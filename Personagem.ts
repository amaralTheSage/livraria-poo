export abstract class Personagem {
  // Abstract Class -> Cant create instances of it

  protected _nome: string = "";

  constructor(nome: string) {
    this._nome = nome;
  }

  public abstract atacar(): void;
}

export class Mago extends Personagem {
  public atacar(): void {
    console.log(`${this._nome} lançou um vrau`);
  }
}

export class Guerreiro extends Personagem {
  public atacar(): void {
    console.log(`${this._nome} atacou com a espada`);
  }
}

const personagens: Personagem[] = [];
const glad = new Mago("Gladimir");
const bruna = new Guerreiro("Bruna");
const edecio = new Mago("Edécio");

console.log(edecio instanceof Guerreiro);

edecio.atacar();
glad.atacar();
bruna.atacar();

interface PersonagemDAO {
  salvar(personagem: Personagem): Personagem;
  atualizar(id: number, personagem: Personagem): Personagem;
  listar(): Personagem[];
  remover(id: number): boolean;
  
}
