import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professores =
   [
     {nome:'Josyane'},
     {nome:'Eduardo'},
     {nome:'Roberta'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
}