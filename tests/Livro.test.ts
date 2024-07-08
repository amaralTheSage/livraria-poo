import { Livro } from "../classes/Livro";
import fs from "fs";
import Prompt from "prompt-sync";

jest.mock("fs");
jest.mock("prompt-sync");

const prompt = Prompt();

describe("Livro", () => {
    const titulo = 'Livro 1';
    const autor = 'Autor 1';
    const ISBN = '123';
    const ano = 2021;
    let livro: Livro;


    beforeEach(() => {
        livro = new Livro(titulo, autor, ISBN, ano);
        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify([]));
        (fs.writeFileSync as jest.Mock).mockClear();
    });


    test("Deve adicionar um livro", () => {
        livro.adicionar();
        expect(fs.writeFileSync).toHaveBeenCalledWith(
            './data/livros.json',
            JSON.stringify([{titulo, autor, ISBN, ano}], null, 2)
        );
    });

    test("Deve listar livros", () => {
        (fs.readFileSync as jest.Mock).mockReturnValueOnce(JSON.stringify([{
            titulo, autor, ISBN, ano
        }]));

        const visualizarTabela = jest.spyOn(console, 'table').mockImplementation();
        livro.listar();

        expect(visualizarTabela).toHaveBeenCalledWith([{
            titulo, autor, ISBN, ano
          }]);
        
    });

});