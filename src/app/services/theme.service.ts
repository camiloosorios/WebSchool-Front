import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Tema } from '../themes/temas.interface';
import { TEMAS } from '../themes/temas';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  //Modificar el DOM
  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTema(pagina: string) {

    const tema: Tema = (TEMAS as any)[pagina];
    
    Object.keys(tema).forEach((key:string) =>{
      
      this.document.documentElement.style.setProperty(`--${key}`, (tema as any)[key])
    });

  }

}
