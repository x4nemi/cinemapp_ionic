import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = []; /*
    {
      titulo: "Matrix",
      anio: 1999,
      director: "Hermanas Wachosky",
      imagen: "https://i.ytimg.com/vi/7L6BheyqeaM/maxresdefault.jpg"
    },
    {
      titulo: "28 Days Later",
      anio: 2003,
      director: "Danny Boyle",
      imagen: "https://i.ytimg.com/vi/7L6BheyqeaM/maxresdefault.jpg"
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }

}
