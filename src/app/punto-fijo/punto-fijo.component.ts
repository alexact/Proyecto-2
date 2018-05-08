import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-punto-fijo',
  templateUrl: './punto-fijo.component.html',
  styleUrls: ['./punto-fijo.component.css']
})
export class PuntoFijoComponent implements OnInit {
  resultado : any;
  plot : any;
  r : any;
  table : any[];
  text:any;
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
  puntoFijo(ec,xo,err){
    var ecuacion = btoa(ec);
    this.http.get('http://127.0.0.1:5000/metodos/puntofijo/'+ ecuacion + '/' + xo + '/' + err).subscribe(res => {
  this.resultado=res;
  this.text = this.resultado.texto;
  this.table = this.resultado.iterac;
  console.log(this.resultado);
  });
}
}
