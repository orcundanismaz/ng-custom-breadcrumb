import { Component, Input } from '@angular/core';

@Component({
  selector: 'breadcrumb-component',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ["./breadcrumb.component.css"]

 
})
export class BreadcrumbComponent {

    @Input() breadcrumbModel: any;
    model: any[];

    constructor() {
        debugger;
       
  }

}
