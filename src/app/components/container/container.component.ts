import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  students: any[] = [];

  constructor() { }

  ngOnInit(): void {}

  dataStudents($event: any): void {
    this.students.push($event);
  }

}
