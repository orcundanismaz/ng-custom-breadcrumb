import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbDirective } from './breadcrumb.directive';
import { BreadcrumbPipe } from './breadcrumb.pipe';
import { BreadcrumbService } from './breadcrumb.service';

export * from './breadcrumb.component';
export * from './breadcrumb.directive';
export * from './breadcrumb.pipe';
export * from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent,
    BreadcrumbDirective,
    BreadcrumbPipe
  ],
  exports: [
    BreadcrumbComponent,
    BreadcrumbDirective,
    BreadcrumbPipe
  ]
})
export class BreadcrumbModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: BreadcrumbModule,
      providers: [BreadcrumbService]
    };
  }
}
