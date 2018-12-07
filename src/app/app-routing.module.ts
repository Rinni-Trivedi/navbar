import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { child2Module } from './child2/child2.module';
import { child3Module } from './child3/child3.module';
const approutes: Routes = [
  {
    path: 'child2',
    loadChildren: './child2/child2.module#child2Module',
  },
  {
    path: 'child3',
    loadChildren: './child3/child3.module#child3Module',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule],
  providers: [
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
