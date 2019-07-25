import { JokesService } from './../services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  piada: any;
  url: string;

  constructor(private jokesService: JokesService) {
    this.url = 'https://yt3.ggpht.com/a-/AAuE7mB26ZPmUSpTqFfDH-0TtH7C1ezO3W28JPyOIw=s288-mo-c-c0xffffffff-rj-k-no';
   }

  ngOnInit() {
    this.piada = this.jokesService.piada;
  }

}
