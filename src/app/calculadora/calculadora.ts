import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  pantalla: string = '0';
  operandoA: number | null = null;
  operacion: string | null = null;
  reiniciarPantalla: boolean = false;

  // Agrega un número a la pantalla
  agregarNumero(num: string) {
    if (this.pantalla === '0' || this.reiniciarPantalla) {
      this.pantalla = num;
      this.reiniciarPantalla = false;
    } else {
      this.pantalla += num;
    }
  }

  // Agrega el punto decimal
  agregarDecimal() {
    if (this.reiniciarPantalla) {
      this.pantalla = '0.';
      this.reiniciarPantalla = false;
      return;
    }
    if (!this.pantalla.includes('.')) {
      this.pantalla += '.';
    }
  }

  // Selecciona la operación (+, -, *, /)
  seleccionarOperacion(op: string) {
    this.operandoA = parseFloat(this.pantalla);
    this.operacion = op;
    this.reiniciarPantalla = true;
  }

  // Realiza el cálculo
  calcular() {
    if (this.operandoA === null || this.operacion === null) return;

    const operandoB = parseFloat(this.pantalla);
    let resultado = 0;

    switch (this.operacion) {
      case '+': resultado = this.operandoA + operandoB; break;
      case '-': resultado = this.operandoA - operandoB; break;
      case '*': resultado = this.operandoA * operandoB; break;
      case '/':
        resultado = operandoB !== 0 ? this.operandoA / operandoB : 0; // Evita división por cero
        break;
    }

    this.pantalla = resultado.toString();
    this.operandoA = null;
    this.operacion = null;
    this.reiniciarPantalla = true;
  }

  // Limpia la pantalla
  limpiar() {
    this.pantalla = '0';
    this.operandoA = null;
    this.operacion = null;
    this.reiniciarPantalla = false;
  }
}
