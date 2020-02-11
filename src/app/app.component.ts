import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';
import { FilmService } from './services/film.service';
import { People } from './model/people';
import { NgForm } from '@angular/forms';
import { Film } from './model/film';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-front';

  people = {} as People;
  peoples: People[];
  film = {} as Film;
  films: Film[];

  constructor(private peopleService: PeopleService, private filmService: FilmService) {}

  ngOnInit() {
    this.getPeoples();
    this.getFilms();
  }
  // Recupera peoples
  getPeoples() {
    this.peopleService.getPeoples().subscribe((peoples: People[]) => {
      this.peoples = peoples;
    });
  }
  getFilms() {
    this.filmService.getFilms().subscribe((films: Film[]) => {
      this.films = films;
    });
  }
  // savePeople(form: NgForm) {
  //     this.peopleService.savePeople(this.people).subscribe(() => {
  //       this.cleanForm(form);
  //     });
  //   }
  // // deleta um carro
  // deleteCar(people: People) {
  //   this.peopleService.deletePeople(people).subscribe(() => {
  //     this.getPeoples();
  //   });
  // }

  // // limpa o formulario
  // cleanForm(form: NgForm) {
  //   this.getPeoples();
  // }

}
