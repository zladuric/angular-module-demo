import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { RouterModule } from '@angular/router';
import { UnitPickerComponent } from './components/unit-picker/unit-picker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, SearchFilterComponent, UnitPickerComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {
}
