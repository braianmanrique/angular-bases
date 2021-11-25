import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
  heroes: string [] = ['Spiderman', 'Ironman'];
  heroeBorrado: string= '';
  isEli: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';
    if(this.heroeBorrado != ''){
      this.isEli = true;
    }
  }

}
