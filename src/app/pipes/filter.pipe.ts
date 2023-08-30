import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //transform:methode predefinie qui s'exute automatiquement lors de l'appel de la pipes FilterPipe avec le nom filter
    transform(objs:any, term:string): any {
      //dernier any: type de retour de methode transform
      if (term === undefined) {
      return objs;
      }
      return objs.filter((obj)=> {
        // filter(obj): methode predefinie
      return (obj.teamOne.toLowerCase().includes(term.toLowerCase())
      || obj.teamTwo.toLowerCase().includes(term.toLowerCase()));
      })
      }
  }


