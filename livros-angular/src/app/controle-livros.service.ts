import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 3'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor 4', 'Autor 5', 'Autor 6'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.reduce((max, l) => l.codigo > max ? l.codigo : max, 0);
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
