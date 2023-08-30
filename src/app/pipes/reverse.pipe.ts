import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string): any {
    // any type de retour
    let revers: string="";
    let aux="";
    for (let i = ch.length -1; i >= 0; i--) {
      revers= revers + ch[i];
      // for (let i = 0; i < ch.length; i++) {
      //   reverse = ch[i]+ reverse;
        
      }return revers; 
    } 
  }


