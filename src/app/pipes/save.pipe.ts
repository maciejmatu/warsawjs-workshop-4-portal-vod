import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'save'
})
export class SavePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
