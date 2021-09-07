import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordWrap'
})
export class WordWrapPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
