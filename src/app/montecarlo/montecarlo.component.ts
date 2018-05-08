import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-montecarlo',
  templateUrl: './montecarlo.component.html',
  styleUrls: ['./montecarlo.component.css']
})
export class MontecarloComponent implements OnInit {
  resultado : any;
  plot : any;
  r : any;
  
  constructor(private http: HttpClient) { }

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
  montecarlo(ec,li,ls,particiones,m){
    var ecuacion = btoa(ec);
    var lI=btoa(li)
    var lS=btoa(ls)
    var mm=btoa(m)
    this.http.get('http://127.0.0.1:5000/integr/montecarlo/'+ ecuacion+'/'+lI+'/'+lS+'/'+particiones+'/'+ mm).subscribe(res=>{
      this.resultado=res;
      console.log(res);
      });
  }
}

