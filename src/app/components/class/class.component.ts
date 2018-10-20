import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

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
  displayedColumns: string[] = ['id', 'name', 'subject1', 'subject2', 'subject3', '_id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // navigate to View Details for a particular student
  viewDetails(id) {
    alert('Navigate to Student with Student Id: ' + id);
  }
}

