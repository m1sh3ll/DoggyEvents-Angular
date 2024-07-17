import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timezone',
})
export class TimezonePipe implements PipeTransform {
  transform(value: string | Date, targetZone: string): string {
    if (!value) return '';

    const date = new Date(value + "Z");
    const options: any = {
      timeZone: targetZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      //second: '2-digit',
    };
    return date.toLocaleString('en-US', options);
  }
}
