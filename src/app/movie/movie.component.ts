import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movieImage1: string =
    'https://upload.wikimedia.org/wikipedia/en/e/e5/Pok%C3%A9mon_Detective_Pikachu_teaser_poster.jpg';

  watchProperty: boolean = false;
  movieDescroption =
    'Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man...';

  constructor() {}

  ngOnInit(): void {}

  showDetails() {
    alert(this.movieDescroption);
  }
}
