import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  
  public professores =
   [
     {id:'1', nome:'Josyane'},
     {id:'2', nome:'Eduardo'},
     {id:'3', nome:'Roberta'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}