import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MainService, TemDataClass } from '../child2/main.service';

@Component({
  selector: 'child2root',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  ngOnInit() {

  }
  inputName: string = '';

  items: TemDataClass[];
  errorMessage: string;
  index: number;

  constructor(public fb: FormBuilder, private mainservice: MainService) {
    this.items = this.mainservice.temdata;
  }

  public loginForm = this.fb.group({
    pname: [""],
    price: [""],
  });

  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  direction: number;

  sortByColumn(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

  doAddition() {
    console.log(this.loginForm.value);

    if (this.editTitle == false && this.addTitle == true)
      this.items.push(this.loginForm.value);
    else
      this.items[this.index] = this.loginForm.value;

    this.loginForm.reset() // reset form to empty
    this.editTitle = false;
    this.addTitle = true;

  }

  addTitle = true;
  editTitle = false;
  edititem(item, i) {
    this.index = i;
    this.editTitle = true;
    this.addTitle = false;
    this.loginForm.setValue({
      pname: item.pname,
      price: item.price
    })
  }

  deleteitem(index) {
    console.log(index);
    this.items.splice(index, 1);
  }

  FilterByName() {
    this.items = [];

    if (this.inputName != "") {
      this.mainservice.temdata.forEach(element => {
        if (element.pname.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.items.push(element);
        }
      });
    } else {
      this.items = this.mainservice.temdata;
    }
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
