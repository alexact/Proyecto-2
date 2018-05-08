import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-polinomios',
  templateUrl: './polinomios.component.html',
  styleUrls: ['./polinomios.component.css']
})
export class PolinomiosComponent implements OnInit {
  resultado : any;
  plot : any;
  r : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  graficadora(ec){
    var ecuacion = btoa(ec);
    this.http.get('http://127.0.0.1:5000/metodos/graf/'+ ecuacion).subscribe(res=>{
      this.r = res;
      this.plot = 'data:image/jpeg;base64,' + this.r.grafica;
      console.log (res);
    })
  }
  polinomio(ec){
    var ecuacion = btoa(ec);
    this.http.get('http://127.0.0.1:5000/metodos/polinomios/'+ ecuacion).subscribe(res => {
    this.resultado=res;
    console.log(res);
  });
    }
}
