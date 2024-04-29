import { Component, Input, inject } from '@angular/core';
import { AppComponent } from '../app.component';
import {MatTableModule} from '@angular/material/table';
import { IShow } from '../show';
import { TraerShowsService } from '../apiCalls/traer-shows.service';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PopupService } from '../apiCalls/popup/popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { TraerConductoresService } from '../apiCalls/traer-conductores.service';

@Component({
  selector: 'lista-show',
  standalone: true,
  imports: [AppComponent,MatTableModule,NgFor,NgForOf,CommonModule,RouterModule,RouterOutlet,MatDialogModule],
  templateUrl: './lista-show.component.html',
  styleUrl: './lista-show.component.css'
})
export class ListaShowComponent {
  @Input() show!: any;

  listaShows: IShow[] = [];
  resultados: IShow[] = [];

  servicios: TraerShowsService = inject(TraerShowsService);
  servicioConductor: TraerConductoresService=inject(TraerConductoresService);
  constructor(private servicio:TraerShowsService, private popupService: PopupService){
    
    this.servicios.getAllShow().subscribe((data: any) => {
      if(data && data.shows && Array.isArray(data.shows)) {
        this.listaShows = data.shows
      }
      
      this.resultados=this.listaShows;
    });
    
    
    console.log(this.listaShows);
  }

  ngOnInit()
  {
  }

  filtrarResultados(text: string) {
    if (!text) {
      this.resultados = this.listaShows;
      return;
    }
    this.resultados = this.listaShows.filter(
      showActual => showActual?.nombre.toLowerCase().includes(text.toLowerCase())
    );
  }
  onSubmit(e: { preventDefault: () => void; }, texto:string){
    if (e) e.preventDefault();
    this.filtrarResultados(texto);
  }
  openPopup(id: number) { 
    this.popupService.openPopupUpdateShow(id);
  }

  borrarShow(id:number) {
    this.servicios.deleteShow(id).subscribe(()=>{
      //borrar show
    });
    location.reload();
  }
}
