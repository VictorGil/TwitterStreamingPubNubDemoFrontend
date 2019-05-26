import { Pipe, PipeTransform } from '@angular/core';
import DateUtil from './classes/dateUtil';

@Pipe({
    name: 'toTimeStringFromMillis'
  })
  export class ToTimeStringFromMillisPipe implements PipeTransform {
    transform(value: number): string {
      return DateUtil.getTimeStringFromNumber(value);
    }
  }
