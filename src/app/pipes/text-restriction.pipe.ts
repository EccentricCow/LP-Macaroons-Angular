import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textRestriction'
})
export class TextRestrictionPipe implements PipeTransform {

  transform(value: string, characterCount?: number): string {
    return value.length > (characterCount ? characterCount : 95) ?
      value.substring(0, characterCount ? characterCount : 95).concat('...') : value;
  }
}
