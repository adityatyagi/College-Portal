import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// for routing
import { Router } from '@angular/router';

// export interface StudentElement {
//   _id: number;
//   id: number;
//   name: string;
//   subject1: number;
//   subject2: number;
//   subject3: number;
// }
export interface SpecificStudentData {
  _id: number;
  id: number;
  subject: string;
  midsem1: number;
  midsem2: number;
  endsem: number;
  eligible: string;
}

// dataset from API for Computer Science - Class 1
const ELEMENT_DATA: SpecificStudentData[] = [
  {_id: 1, id: 1, subject: 'Subject 1', midsem1: 45, midsem2: 24, endsem: 55, eligible: 'Yes'},
  {_id: 2, id: 2, subject: 'Subject 2', midsem1: 25 , midsem2: 21, endsem: 78, eligible: 'No'},
  {_id: 3, id: 3, subject: 'Subject 3', midsem1: 42, midsem2: 12, endsem: 65, eligible: 'Yes'}
];


@Component({
  selector: 'app-overall-results',
  templateUrl: './overall-results.component.html',
  styleUrls: ['./overall-results.component.scss']
})
export class OverallResultsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'subject', 'midsem1', 'midsem2', 'endsem', 'eligible', '_id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private router: Router) {

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
    this.router.navigate(['/computerScience/class1/1']);
    // this.router.navigate(['/computerScience/class1/1', result.key]);
    }

}

