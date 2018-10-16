import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'breadcrumbPipe'
})
@Injectable()
export class BreadcrumbPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
