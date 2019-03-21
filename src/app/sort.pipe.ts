import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objArr: any[], column: string, order: string ='asc'): any[]{

    if(typeof objArr === "undefined") return;
      return objArr.sort(compare);

    function compare(a: any, b:any){
      let A: string = a[column].toLowerCase();
      let B: string = b[column].toLowerCase();

      if( A === B) return 0;
      
      if(order=== 'asc')
      return A > B ? 1 : -1;
      else 
      return A < B ? 1 : -1;
    }  
  }

}
