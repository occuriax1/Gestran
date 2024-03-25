import { Component, OnInit } from '@angular/core';
import { Publicacao, Livro, Periodico } from '../../../publicacao';


@Component({
  selector: 'app-a1.5-classe',
  templateUrl: './a1.5-classe.component.html',
  styleUrls: ['./a1.5-classe.component.scss']
})
export class A15ClasseComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // Exemplo de como criar uma instância de Livro
    const meuLivro = new Livro('O Nome do Livro', 'Autor do Livro', 2021, '1234567890');
    console.log(meuLivro.descricao());
  }
}