import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findName'
})
export class NamePipe implements PipeTransform {

  transform(infoData: { id: number; name: string }[], jobList: { companyId: number }[], id: number): string | number {
    let name: number | string = '';
    jobList.forEach(() => {
      infoData.forEach(info => {
        if (info.id === id) {
          name = info.name;
        }
      });
    });
    return name;
  }

}
