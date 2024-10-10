import { Injectable } from '@angular/core';
import MovieList from '../../Database/MovieList';
@Injectable({
  providedIn: 'root'
})
export class MovieListService {
private movie: MovieList[]=[]

addMovies(id: string, title: string, genre: string, year: number):void
{this.movie.push({
  id:id,
  title:title,
  genre:genre,
  year:year
});
}
  getMovies():MovieList[]
  {return this.movie;}
  constructor() { }
}
