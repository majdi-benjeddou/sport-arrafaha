import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
  motModifie: string;
  // transform cest une methode
  transform(ch: string) {
  let  voy= ["a","e","i","o","u","A","E","I","O","U"]
  let novCh: string="";
      for (let i = 0; i < ch.length; i++) {
        let x= ch[i];
        for (let j = 0; j < voy.length; j++) {
          
          if (voy[j]==x) {
            x= "*";
            break;
          }
        }
        novCh += x;
      }
      return novCh;
  }

}
