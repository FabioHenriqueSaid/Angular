import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  public alunos =
  [
    { nome: 'Fábio' },
    { nome: 'Maria' },
    { nome: 'João'  },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}