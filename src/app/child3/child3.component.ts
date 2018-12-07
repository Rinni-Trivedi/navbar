import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'child3root',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
   ngOnInit() {

  }
}
// export class ModalContentComponent implements OnInit {
//   title: string;
//   closeBtnName: string;
//   list: any[] = [];

//   constructor(public bsModalRef: BsModalRef) {}

//   ngOnInit() {
//     this.list.push('PROFIT!!!');
//   }
// }
