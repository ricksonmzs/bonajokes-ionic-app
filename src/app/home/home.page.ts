import { JokesService } from './../services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private jokesService: JokesService) {}

  piada: any;
  piadas: any[];
  valorInput: string;
  url = 'https://yt3.ggpht.com/a-/AAuE7mB26ZPmUSpTqFfDH-0TtH7C1ezO3W28JPyOIw=s288-mo-c-c0xffffffff-rj-k-no';
  piadasFilter: any[];

  // ngOnInit(){
  //   this.getJokes();
  // }

  showJokes(){
    this.jokesService.getAllJokes().subscribe(piadas =>{
      this.piada = piadas[this.indexAleatorio(piadas)];
    }, erro => {
      console.log(erro);
    }, () => {
      console.log('sucesso');
    });
  }

  indexAleatorio(piadas){
    const index = Math.floor(Math.random() * piadas.length+1);
    return index;
  }

  getJokes(){
    this.jokesService.getAllJokes().subscribe(dados =>{
      this.piadas = dados;
      this.piadasFilter = this.piadas.filter ( dado => {
        if(dado.pergunta.toUpperCase().match(this.valorInput.toUpperCase())) {
          return dado;
        }
      })
    }, erro => {
      console.log(erro);
    }, () => {
      console.log('sucesso');
    });
  }

  searchOnJokes(){
    this.piadasFilter = this.piadas.filter ( dado => {
      if(dado.pergunta.match(this.valorInput)) {
        return dado;
      }
    })
  }

  prepareToDetail(piada){
    this.jokesService.piada = piada;
  }
}
