import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-regla-falsa',
  templateUrl: './regla-falsa.component.html',
  styleUrls: ['./regla-falsa.component.css']
})
export class ReglaFalsaComponent implements OnInit {
  resultado : any;
  plot : any;
  r : any;
  table : any[];
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
  reglafalsa(ec,li,ls,err){
    var ecuacion = btoa(ec);
    this.http.get('http://127.0.0.1:5000/metodos/reglafalsa/'+ ecuacion + "/"+ li + "/"+ ls + "/"+ err).subscribe(res => {
  this.resultado=res;
  this.table = this.resultado.rfalsa;
  console.log(this.table);
  });
    }

}
