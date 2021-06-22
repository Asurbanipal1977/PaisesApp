import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS (region: string):string{
    return (region==this.regionActiva) ? 'btn btn-primary mr-1':'btn btn-outline-primary mr-1'
  }

  activarRegion(regionActiva: string){

    if (regionActiva === this.regionActiva) return; 
    this.regionActiva=regionActiva;
    this.paises = [];
    this.hayError = false;
    this.paisService.buscarRegion(regionActiva).subscribe( (paises) => 
        {
          this.paises=paises;
        }, (err) => {
          this.hayError = true;
          this.paises = [];
          console.log (err);
        }
      );
  }

  ngOnInit(): void {
  }

}
