import { Component, OnInit } from '@angular/core';
import { Hechizo } from 'src/app/models/Hechizo';
import { HechizosService } from 'src/app/services/hechizos/hechizos.service';

@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styleUrls: ['./hechizos.component.scss']
})
export class HechizosComponent implements OnInit {

  public hechizosList: Hechizo[] = []

  constructor(private hechizosService: HechizosService) { }

  ngOnInit(): void {
    this.hechizosService.getHechizos().subscribe(hechizosApi => this.hechizosList = hechizosApi)
  }

}
