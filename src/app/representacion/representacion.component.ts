import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-representacion',
  templateUrl: './representacion.component.html',
  styleUrls: ['./representacion.component.css']
})
export class RepresentacionComponent implements OnInit {
 r:any;
 resultado:any;
 num:string;
 base:string;
 signo3:any;
 exponente3:any;
 mantisa3:any;
 signo6:any;
 exponente6:any;
 mantisa6:any;
 signos:any;
 memoria:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  
 representa(num,base){
    this.http.get('http://127.0.0.1:5000/basesYRe/Repre/'+ num + "/"+ base).subscribe(res => {
  this.resultado=res;
  this.signo3 = this.resultado.signo32;
  this.mantisa3=this.resultado.mantisa32;
  this.exponente3=this.resultado.exponente32;
  this.signo6 = this.resultado.signo64;
  this.mantisa6=this.resultado.mantisa64;
  this.exponente6=this.resultado.exponente64;

  console.log(this.resultado);
  });
    }

valores(signo){
  this.signos=signo;

}
inversa(signo,exponente,mantisa,memoria){
  this.http.get('http://127.0.0.1:5000/basesYRe/RepreInver/'+ signo + "/"+ exponente +  "/"+mantisa+ "/"+memoria).subscribe(res => {
  this.resultado=res;
  console.log(this.resultado);
  });
}

  

}
