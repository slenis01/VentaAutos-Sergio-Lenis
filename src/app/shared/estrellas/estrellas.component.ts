import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',

})
export class EstrellasComponent implements OnChanges {

  faStar = faStar;
  starsList: any[] = [];

  @Input() calificacion: number = 0;
  @Output() starsClick = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(_changes: SimpleChanges): void {
      this.starsList = [];
      for(let i = 1; i<= this.calificacion; i++) {
        this.starsList.push(1);
      }
  }

  onClick(stars: number): void {
    this.starsClick.emit( "Calificación: "+ stars);
  }
}