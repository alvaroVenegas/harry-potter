import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/Libro';
import { LibrosService } from 'src/app/services/libros/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  public librosList:Libro[] = []

  constructor(private librosService:LibrosService) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe(librosApi => this.librosList = librosApi)
  }

}
