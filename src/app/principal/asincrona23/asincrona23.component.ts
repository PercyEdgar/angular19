import { Component } from '@angular/core';

@Component({
  selector: 'app-asincrona23',
  templateUrl: './asincrona23.component.html',
  styleUrls: ['./asincrona23.component.css']
})
export class Asincrona23Component {
  suma = false
  resta = false
  multi = false
  divi = false

  suma_re = 0
  resta_re = 0
  multi_re = 0
  divi_re = 0

  num1 = 0
  num2 = 0

  resultado = ""
  resultado_res=""
  resultado_mul=""
  resultado_divi=""
  ngOnInit(){
    this.operacion()
  }
  operacion(){
    console.log(this.suma)
    if(this.suma == true){
      let resulta = this.num1 + this.num2
      this.resultado = " La suma es: " +resulta.toString() +" "
    }else{
      this.resultado = ""
    }
    if(this.resta == true){
      let resulta = this.num1 - this.num2
      this.resultado_res = " La diferencia es: " +resulta.toString() +" "
    }else{
      this.resultado_res = ""
    }
    if(this.multi == true){
      let resulta = this.num1 * this.num2
      this.resultado_mul = " El producto es: " +resulta.toString() +" "
    }else{
      this.resultado_mul = ""
    }
    if(this.divi == true){
      let resulta = this.num1 / this.num2
      this.resultado_divi = " La division es: " +resulta.toString() +" "
    }else{
      this.resultado_divi = ""
    }
  }
}
