import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() addStudent: EventEmitter<any> = new EventEmitter<any>();

  dataStudents = this.formBuilder.group({
    firstname: ["", [Validators.required]],
    lastname: ["", [Validators.required]],
    age: ["", [Validators.required, Validators.min(18)]],
    email: ["", [Validators.required, Validators.email]],
    image: ["", []],
    commission: ["", [Validators.required]],
    status: ["", [Validators.required]],
    courses: new FormArray([new FormControl()])
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {}

  sendData(): void {
    this.addStudent.emit(this.dataStudents.value);
  }

  when_error(ref: string, validator: any): boolean {
    return !validator ? this.dataStudents.get(ref)?.errors : this.dataStudents.get(ref)?.errors?.[validator];
  }
  when_touched(ref: string): any {
    return this.dataStudents.get(ref)?.touched;
  }

  get this_courses(): FormArray {
    return this.dataStudents.get("courses") as FormArray;
  }

  addCourse(): void {
    this.this_courses.push(new FormControl());
  }
  removeCourse(): void {
    this.this_courses.removeAt([this.this_courses].length);
  }

}
