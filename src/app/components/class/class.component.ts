import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// for routing
import { Router, ActivatedRoute } from '@angular/router';

export interface StudentElement {
  _id: number;
  id: number;
  name: string;
  subject1: number;
  subject2: number;
  subject3: number;
}

// dataset from API for Computer Science - Class 1
const ELEMENT_DATA: StudentElement[] = [
  {_id: 1, id: 1, name: 'Aditya Tyagi', subject1: 45, subject2: 24, subject3: 55},
  {_id: 2, id: 2, name: 'Gaurav Trehan', subject1: 25 , subject2: 21, subject3: 78},
  {_id: 3, id: 3, name: 'Sanju Metha', subject1: 42, subject2: 12, subject3: 65},
  {_id: 4, id: 4, name: 'Prateek Jain', subject1: 78, subject2: 45, subject3: 21},
  {_id: 5, id: 5, name: 'Sarthak Grover', subject1: 54, subject2: 33, subject3: 11},
  {_id: 6, id: 6, name: 'Shiavni Chhabra', subject1: 31, subject2: 47, subject3: 33},
  {_id: 7, id: 7, name: 'Pooja Grover', subject1: 45, subject2: 55, subject3: 21},
  {_id: 8, id: 8, name: 'Ayush Tyagi', subject1: 66, subject2: 46, subject3: 22},
  {_id: 9, id: 9, name: 'Ananat Tyagi', subject1: 12, subject2: 41, subject3: 41},
  {_id: 10, id: 10, name: 'Shuchi Jain', subject1: 75, subject2: 14, subject3: 66},
  {_id: 11, id: 11, name: 'Aditya Rastogi', subject1: 45, subject2: 24, subject3: 55},
  {_id: 12, id: 12, name: 'Ayushman Trehan', subject1: 25 , subject2: 21, subject3: 78},
  {_id: 13, id: 13, name: 'Sanjay Dutt', subject1: 42, subject2: 12, subject3: 65},
  {_id: 14, id: 14, name: 'SRK', subject1: 78, subject2: 45, subject3: 21},
  {_id: 15, id: 15, name: 'Deepika Padukone', subject1: 54, subject2: 33, subject3: 11},
  {_id: 16, id: 16, name: 'Aishwarya Dhembla', subject1: 31, subject2: 47, subject3: 33},
  {_id: 17 , id: 17, name: 'Pawan Tyagi', subject1: 45, subject2: 55, subject3: 21},
  {_id: 18, id: 18, name: 'Karishma Kapoor', subject1: 66, subject2: 46, subject3: 22},
  {_id: 19, id: 19, name: 'Hirandani', subject1: 12, subject2: 41, subject3: 41},
  {_id: 20, id: 20, name: 'Aniket Singh', subject1: 75, subject2: 14, subject3: 66}
];


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-class',
templateUrl: './class.component.html',
styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'subject1', 'subject2', 'subject3', '_id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  stream: string;
  classId: string;
  streamName: {};
  newObject: {};

  // stream data - Breadcrumb
  streamData = {
    informationTechnology: 'Information Technology',
    computerScience: 'Computer Science',
    electrical: 'Electrical',
    mechanical: 'Mechanical',
    tool: 'Tool Engineering',
    chemical: 'Chemical Engineering',
    biochemical: 'Bio-Chemical',
    civil: 'Civil'
  };

  constructor( private router: Router, breakpointObserver: BreakpointObserver, private route: ActivatedRoute) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      // showing selected columns in mobile view
      this.displayedColumns = result.matches ?
          ['id', 'name', 'subject1', 'subject2', 'subject3', '_id'] :
          ['id', 'name', 'subject1', 'subject2', 'subject3', '_id'];
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stream = params.get('stream');
      this.classId = params.get('classId');
      // filter stream
      this.streamName = this.copyObjectProps(this.streamData, [this.stream]);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  copyObjectProps(source, keys) {
    this.newObject = source[keys];
    return this.newObject;
 }
}


