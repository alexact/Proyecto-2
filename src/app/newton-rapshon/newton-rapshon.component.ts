import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-newton-rapshon',
  templateUrl: './newton-rapshon.component.html',
  styleUrls: ['./newton-rapshon.component.css']
})
export class NewtonRapshonComponent implements OnInit {
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
  newtonRap(ec,xo,err){
    var ecuacion = btoa(ec);
    this.http.get('http://127.0.0.1:5000/metodos/newtonR/'+ ecuacion + "/"+ xo + "/"+  err).subscribe(res => {
  this.resultado=res;
  this.table = this.resultado.newt;
  console.log(this.table);
  });
    }

}
