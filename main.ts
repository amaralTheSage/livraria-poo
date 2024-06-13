import Prompt from "prompt-sync";

const key = Prompt();

while (true) {
  console.log("+----------------------+");
  console.log("| Administrar:         |");
  console.log("| 1. Livros            |");
  console.log("| 2. Membros           |");
  console.log("| 3. Empréstimos       |");
  console.log("| 0. Sair              |");
  console.log("+----------------------+");

  let menuSelecionado: number = +key("- ");

  // LIVROS
  if (menuSelecionado == 1) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo livro               |");
      console.log("| 2. Listar livros                      |");
      console.log("| 3. Atualizar um livro                 |");
      console.log("| 4. Remover livro                      |");
      console.log("| 0. Sair                               |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      switch (opcao) {
        case 1:
          console.log("teste");
          break;
        case 2:
          console.log("teste");
          break;
        case 3:
          console.log("teste");
          break;
        case 0:
          break;
      }
    }
  }

  //MEMBROS
  else if (menuSelecionado == 2) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo membro               |");
      console.log("| 2. Listar membros                      |");
      console.log("| 3. Atualizar um membro                 |");
      console.log("| 4. Remover membro                      |");
      console.log("| 0. Sair                                |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      switch (opcao) {
        case 1:
          console.log("teste");
          break;
        case 2:
          console.log("teste");
          break;
        case 3:
          console.log("teste");
          break;
        case 0:
          break;
      }
    }
  }

  //EMPRESTIMOS
  else if (menuSelecionado == 3) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo empréstimos          |");
      console.log("| 2. Listar empréstimos                  |");
      console.log("| 3. Atualizar um empréstimos            |");
      console.log("| 4. Remover empréstimos                 |");
      console.log("| 0. Sair                                |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      switch (opcao) {
        case 1:
          console.log("teste");
          break;
        case 2:
          console.log("teste");
          break;
        case 3:
          console.log("teste");
          break;
        case 0:
          break;
      }
    }
    //SAIR
  } else if (menuSelecionado == 0) {
    break;
  } else {
    console.log("Selecione uma das opções pelos números.");
  }
}

// console.log("+---------------------------------------+");
// console.log("| 1. Adicionar novo livro               |");
// console.log("| 2. Listar livros                      |");
// console.log("| 3. Atualizar um livro                 |");
// console.log("| 4. Remover Livro                      |");
// console.log("| 0. Sair                               |");
// console.log("+---------------------------------------+");
