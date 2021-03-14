import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  public titulo = 'Alunos';
  public alunos =
  [
    { id:1, nome: 'Fábio' },
    { id:2, nome: 'Maria' },
    { id:2, nome: 'João'  },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}