import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// for routing
import { Router } from '@angular/router';

export interface SemesterSpecificData {
  _id: number;
  id: number;
  subject: string;
  semester1: number;
  semester2: number;
  semester3: number;
  semester4: number;
  semester5: number;
  semester6: number;
  semester7: number;
  semester8: number;
}

// dataset from API for Computer Science - Class 1
const ELEMENT_DATA: SemesterSpecificData[] = [
  {_id: 1, id: 1, subject: 'Subject 1', semester1: 75, semester2: 94, semester3: 70, semester4: 72, semester5: '', semester6: '', semester7: '', semester8: ''},
  {_id: 2, id: 2, subject: 'Subject 2', semester1: 65 , semester2: 81, semester3: 78, semester4: 74, semester5: '', semester6: '', semester7: '', semester8: ''},
  {_id: 3, id: 3, subject: 'Subject 3', semester1: 82, semester2: 72, semester3: 85, semester4: 84, semester5: '', semester6: '', semester7: '', semester8: ''}
];

@Component({
  selector: 'app-semester-results',
  templateUrl: './semester-results.component.html',
  styleUrls: ['./semester-results.component.scss']
})
export class SemesterResultsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'subject', 'semester1', 'semester2', 'semester4', 'semester5', 'semester6', 'semester7', 'semester8'];
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
    alert('Navigate to Student with Student Id: ' + id);
    this.router.navigate(['/computerScience/class1/1']);
    // this.router.navigate(['/computerScience/class1/1', result.key]);
    }

}