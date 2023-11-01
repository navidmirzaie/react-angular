import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../Movie";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input() movie:Movie;
  @Input() size: string = "small";

  ngOnInit(): void {
  }


  getCssRatingClass():string {
    let cssClass: string = 'rating';

    if (this.movie.vote_average) {
      if(this.movie.vote_average <= 5) {
        cssClass += " bad";
      } else if (this.movie.vote_average >=5 && this.movie.vote_average <= 7.9) {
        cssClass += " medium";
      } else if (this.movie.vote_average >= 8.0) {
        cssClass += " great";
      }
    }

    return cssClass;
  }

}
