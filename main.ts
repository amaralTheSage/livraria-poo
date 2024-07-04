import Prompt from "prompt-sync";
import { Membro } from "./classes/Membro";
import fs from "fs";
import { Livro } from "./classes/Livro";
import { Emprestimo } from "./classes/Emprestimo";

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

      if (opcao == 0) {
        break;
      }

      switch (opcao) {
        case 1:
          let titulo: string = key("Título: ");
          let autor: string = key("Autor: ");
          let ISBN: string = key("ISBN: ");
          let ano: number = +key("Ano: ");

          const livro = new Livro(titulo, autor, ISBN, ano);
          livro.adicionar();
          break;
        case 2:
          const livroList = new Livro("", "", "", 0);
          livroList.listar();
          break;
        case 3:
          const livroUpdate = new Livro("", "", "", 0);
          livroUpdate.atualizar();
          break;
        case 4:
          const livroDelete = new Livro("", "", "", 0);
          livroDelete.deletar();
          break;
      }
    }
  }

  // MEMBROS
  else if (menuSelecionado == 2) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo membro              |");
      console.log("| 2. Listar membros                     |");
      console.log("| 3. Atualizar um membro                |");
      console.log("| 4. Remover membro                     |");
      console.log("| 0. Sair                               |");
      console.log("+---------------------------------------+");

      let opcao: number = +key("- ");

      if (opcao == 0) {
        break;
      }

      switch (opcao) {
        case 1:
          let nome: string = key("Nome: ");
          let endereco: string = key("Endereço: ");
          let CPF: string = key("CPF: ");
          let telefone: string = key("Telefone: ");

          const membro = new Membro(nome, endereco, CPF, telefone);
          membro.adicionar();
          break;
        case 2:
          const membroList = new Membro("", "", "", "");
          membroList.listar();
          break;
        case 3:
          const membroUpdate = new Membro("", "", "", "");
          membroUpdate.atualizar();
          break;
        case 4:
          const membroDelete = new Membro("", "", "", "");
          membroDelete.deletar();
          break;
      }
    }
  }

  // EMPRESTIMOS
  else if (menuSelecionado == 3) {
    while (true) {
      console.log("+---------------------------------------+");
      console.log("| 1. Adicionar novo empréstimo          |");
      console.log("| 2. Fazer uma devolução                |");
      console.log("| 3. Listar empréstimos não devolvidos  |");
      console.log("| 0. Sair                               |");
      console.log("+---------------------------------------+");
  
      let opcao: number = +key("- ");
  
      if (opcao == 0) {
        break;
      }
  
      switch (opcao) {
        case 1:
          let cpfMembro = key("CPF do Membro: ");
          let ISBN_livro = key("ISBN do Livro: ");
          let dataEmprestimo = key("Data do Empréstimo: ");
          let dataDevolucao = key("Data de Devolução: ");

          const membro = new Membro("Nome do Membro", "Endereço do Membro", cpfMembro, "Telefone do Membro");
          const livro = new Livro("Título do Livro", "Autor do Livro", ISBN_livro, 2023);

          const emprestimo = new Emprestimo(membro, livro, dataEmprestimo, dataDevolucao);
          emprestimo.adicionar();
          break;

        case 2:
          const emprestimoDevolucao = new Emprestimo(new Membro("", "", "", ""), new Livro("", "", "", 0), "", "");
          emprestimoDevolucao.devolver();
          break;

        case 3:
          const emprestimoList = new Emprestimo(new Membro("", "", "", ""), new Livro("", "", "", 0), "", "");
          emprestimoList.listar();
          break;
          
        }
    }
  }
  
  

  // SAIR
  else if (menuSelecionado == 0) {
    break;
  } else {
    console.log("Selecione uma das opções pelos números.");
  }
}
