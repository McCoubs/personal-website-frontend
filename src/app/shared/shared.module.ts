// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// package imports
import { NgbCollapseModule, NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    NgbDropdownModule,
    NgbCollapseModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbModule,
    AngularFontAwesomeModule,
    NgbDropdownModule
  ]
})
export class SharedModule {}
