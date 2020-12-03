import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress')
  txtProgress!: ElementRef;
  // tslint:disable-next-line: no-input-rename
  @Input('Nombre') leyenda: string = 'leyenda';
  // tslint:disable-next-line: no-input-rename
  @Input('Progreso') progreso: number = 10;

  // tslint:disable-next-line: no-output-rename
  @Output('ActualizaValor') CambiaValor: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  cambiarValor( valor: number )
  {
    if ( this.progreso <= 0 && valor < 0){
      return;
    }
    if ( this.progreso >= 100 && valor > 0){
      return;
    }
    this.progreso += valor;
    this.CambiaValor.emit( this.progreso );
  }

  OnChangeInput( newValue: number){
    if ( newValue >= 100){
      this.progreso = 100;
    }else if ( newValue <= 0 || newValue == null){
      this.progreso = 0;
    }
    else{
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.txtProgress.nativeElement.focus();
    this.CambiaValor.emit( this.progreso );
  }
}
