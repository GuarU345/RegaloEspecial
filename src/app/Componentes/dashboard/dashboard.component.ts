import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ver(){
    return alert("Estas segura que lo deseas ver es demasiada hermosura para el ser humano")
  }
  final(){
    return alert("Es el final de la pagina mas no el de nuestra historia")
  }
  continuara(){
    return alert("Una pequeña parte de una historia que apenas comienza")
  }

}
