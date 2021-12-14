import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]=['Iroman', 'spiderman','superman','hulk','batman']
  heroeBorrado:string='';
  borrarHeroe(){
    const heroeBorrado=this.heroes.shift() || '';
    this.heroeBorrado=heroeBorrado;
  }
}
