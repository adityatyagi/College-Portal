import { Component, OnInit } from '@angular/core';

export interface Streams {
  _id: number;
  _pathName: string;
  stream: string;
}

// dataset from API for Computer Science - Class 1
const ELEMENT_DATA: Streams[] = [
  {_id: 1, _pathName: 'computerScience', stream: 'Computer Science'},
  {_id: 2, _pathName: 'informationTechnology', stream: 'Information Technology'},
  {_id: 3, _pathName: 'electrical', stream: 'Electrical'},
  {_id: 4, _pathName: 'mechanical', stream: 'Mechanical'},
  {_id: 5, _pathName: 'tool', stream: 'Tool Engineering'},
  {_id: 6, _pathName: 'chemical', stream: 'Chemical Engineering'},
  {_id: 7, _pathName: 'biochemical', stream: 'Bio-Chemical'},
  {_id: 8, _pathName: 'civil', stream: 'Civil Engineering'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataStreams = ELEMENT_DATA;
  test() {
    console.log(this.dataStreams);
  }
  constructor() { }

  ngOnInit() {
  }

}
