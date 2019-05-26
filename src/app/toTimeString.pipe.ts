import { Pipe, PipeTransform } from '@angular/core';
import DateUtil from './classes/dateUtil';

@Pipe({
    name: 'toTimeString'
  })
  export class ToTimeStringPipe implements PipeTransform {
    transform(value: string): string {
      return DateUtil.getTimeStringFromString(value);
    }
  }
