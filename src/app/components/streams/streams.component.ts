import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {
  stream: string;
  finalClassData: {};
  newObject: {};
  finalObj: {};
  streamName: {};

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

  // class Data
  classData = {
    informationTechnology: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    computerScience: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    electrical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    mechanical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    tool: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    chemical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    biochemical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    civil: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    }

  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.stream = params.get('stream');
    });

    // filter stream data for classes
    this.finalObj = this.copyObjectProps(this.classData, [this.stream]);

    // filter stream
    this.streamName = this.copyObjectProps(this.streamData, [this.stream]);
  }

  copyObjectProps(source, keys) {
    this.newObject = source[keys];
    return this.newObject;
 }
}
