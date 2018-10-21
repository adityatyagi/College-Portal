import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// for routing
import { Router, ActivatedRoute } from '@angular/router';

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
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'subject', 'midsem1', 'midsem2', 'endsem', 'eligible', '_id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  stream: string;
  classId: string;
  studentId: string;
  studentName: {};
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

  // name data
  nameData = {
    1: 'Aditya Tyagi',
    2: 'Gaurav Trehan',
    3: 'Sanju Metha',
    4: 'Prateek Jain',
    5: 'Sarthak Grover',
    6: 'Shiavni Chhabra',
    7: 'Pooja Grover',
    8: 'Ayush Tyagi',
    9: 'Ananat Tyagi',
    10: 'Shuchi Jain',
    11: 'Aditya Rastogi',
    12: 'Ayushman Trehan',
    13: 'Sanjay Dutt',
    14: 'SRK',
    15: 'Deepika Padukone',
    16: 'Aishwarya Dhembla',
    17: 'Pawan Tyagi',
    18: 'Karishma Kapoor',
    19: 'Hirandani',
    20: 'Aniket Singh'
  };

  constructor( private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // fetching url params values
    this.route.paramMap.subscribe(params => {
      this.stream = params.get('stream');
      this.classId = params.get('classId');
      this.studentId = params.get('studentId');
    });

    // filter stream
    this.streamName = this.copyObjectProps(this.streamData, [this.stream]);
    this.studentName = this.copyObjectProps(this.nameData, [this.studentId]);
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

    copyObjectProps(source, keys) {
      this.newObject = source[keys];
      return this.newObject;
   }
}
