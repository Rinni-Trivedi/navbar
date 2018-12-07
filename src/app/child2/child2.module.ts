import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from './child2.component'
import { MainService } from './main.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 const routes: Routes = [
    {
     path: '',
     component: Child2Component
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ MainService ],
  exports: [RouterModule],
  declarations: [
    Child2Component
  ]
})
export class child2Module {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
