import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-metodos-e',
  templateUrl: './metodos-e.component.html',
  styleUrls: ['./metodos-e.component.css']
})
export class MetodosEComponent implements OnInit {
  
  
  resultado : any;
  plot :any;
  constructor(private http : HttpClient) { }

  ngOnInit() {

  }

 

  evaluar(ecuacion, valor){
var ec =btoa(ecuacion);
this.http.get('http://127.0.0.1:5000/Evaluador/'+ ec + "/"+ valor).subscribe(res => {
  this.resultado=res;
  this.plot = 'data:image/jpeg;base64,' + this.resultado.grafica;
  console.log(res)});

  }

}


