import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from 'interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  constructor(private heroeService : HeroesService,
              private activatedRoute : ActivatedRoute,
              private router : Router,
              private snackBar : MatSnackBar,
              private dialog : MatDialog){}

  ngOnInit(): void {

    if(this.router.url.includes('editar')){
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroeService.getHeroeporId(id))
    )
    .subscribe( heroe => this.heroe = heroe)
  }}

  heroe : Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ]

  guardar(){
    if(this.heroe.superhero.trim().length === 0){ return }
    if(this.heroe.id){
      this.heroeService.actualizarHeroe(this.heroe)
        .subscribe({
          next: res => this.mostrarSnackBar("Registro Actualizado")
        })
    }else{
      this.heroeService.agregarHeroe(this.heroe)
        .subscribe(
          {
            next: (heroe) => {this.router.navigate(["/heroes/editar", heroe.id]), this.mostrarSnackBar("Registro Creado") }
          }
        )
    }
    
  }

  borrarHeroe(){

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      height: "200px",
      data: this.heroe
    } )

    dialog.afterClosed().subscribe(
      res => {if(res) {
        this.heroeService.borrarHeroe(this.heroe.id!)
      .subscribe(
        {
          next: (res) => { 
            this.router.navigate(['/heroes'])
           }
        }
      )
    }
  })  
  }

  mostrarSnackBar(mensaje: string){
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2500
    })
  }
}
