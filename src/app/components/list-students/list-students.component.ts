import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  @Input() students: any[] = []

  constructor() { }

  ngOnInit(): void {}

}
