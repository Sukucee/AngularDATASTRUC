import { Injectable } from '@angular/core';
import LibraryList from '../../Database/LibraryList';
@Injectable({
  providedIn: 'root'
})
export class LibraryListService {
  private library: LibraryList[]=[];

    
    addLibrary(name: string, language: string, purpose: string, functions: string  ):void
  {this.library.push({
    name:name,
    language:language,
    purpose:purpose,
    functions:functions
  });
}
  getLibrary():LibraryList[]{
    return this.library;
  }
  constructor() { }
}
