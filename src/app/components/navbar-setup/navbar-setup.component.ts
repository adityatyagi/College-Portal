import { Component, OnInit } from '@angular/core';

export interface NavItem {
  streamName?: string;
  className?: string;
  route?: string;
  children?: NavItem[];
}


@Component({
  selector: 'app-navbar-setup',
  templateUrl: './navbar-setup.component.html',
  styleUrls: ['./navbar-setup.component.scss']
})
export class NavbarSetupComponent implements OnInit {

  navItems: NavItem[] = [
    {
      streamName: 'Computer Science',
      children: [
        {
          className: 'Class 1',
          route: 'stream/computerScience/1'
        },
        {
          className: 'Class 2',
          route: 'stream/computerScience/2'
        },
        {
          className: 'Class 3',
          route: 'stream/computerScience/3'
        },
        {
          className: 'Class 4',
          route: 'stream/computerScience/4'
        }
      ]
    },
    {
      streamName: 'Information Technology',
      children: [
        {
          className: 'Class 1',
          route: 'stream/informationTechnology/1'
        },
        {
          className: 'Class 2',
          route: 'stream/informationTechnology/2'
        },
        {
          className: 'Class 3',
          route: 'stream/informationTechnology/3'
        },
        {
          className: 'Class 4',
          route: 'stream/informationTechnology/4'
        }
      ]
    },
    {
      streamName: 'Electrical',
      children: [
        {
          className: 'Class 1',
          route: 'stream/electrical/1'
        },
        {
          className: 'Class 2',
          route: 'stream/electrical/2'
        },
        {
          className: 'Class 3',
          route: 'stream/electrical/3'
        },
        {
          className: 'Class 4',
          route: 'stream/electrical/4'
        }
      ]
    },
    {
      streamName: 'Mechanical',
      children: [
        {
          className: 'Class 1',
          route: 'stream/mechanical/1'
        },
        {
          className: 'Class 2',
          route: 'stream/mechanical/2'
        },
        {
          className: 'Class 3',
          route: 'stream/mechanical/3'
        },
        {
          className: 'Class 4',
          route: 'stream/mechanical/4'
        }
      ]
    },
    {
      streamName: 'Tool Engineering',
      children: [
        {
          className: 'Class 1',
          route: 'stream/tool/1'
        },
        {
          className: 'Class 2',
          route: 'stream/tool/2'
        },
        {
          className: 'Class 3',
          route: 'stream/tool/3'
        },
        {
          className: 'Class 4',
          route: 'stream/tool/4'
        }
      ]
    },
    {
      streamName: 'Chemical Engineering',
      children: [
        {
          className: 'Class 1',
          route: 'stream/chemical/1'
        },
        {
          className: 'Class 2',
          route: 'stream/chemical/2'
        },
        {
          className: 'Class 3',
          route: 'stream/chemical/3'
        },
        {
          className: 'Class 4',
          route: 'stream/chemical/4'
        }
      ]
    },
    {
      streamName: 'Bio-Chemical',
      children: [
        {
          className: 'Class 1',
          route: 'stream/biochemical/1'
        },
        {
          className: 'Class 2',
          route: 'stream/biochemical/2'
        },
        {
          className: 'Class 3',
          route: 'stream/biochemical/3'
        },
        {
          className: 'Class 4',
          route: 'stream/biochemical/4'
        }
      ]
    },
    {
      streamName: 'Civil',
      children: [
        {
          className: 'Class 1',
          route: 'stream/civil/1'
        },
        {
          className: 'Class 2',
          route: 'stream/civil/2'
        },
        {
          className: 'Class 3',
          route: 'stream/civil/3'
        },
        {
          className: 'Class 4',
          route: 'stream/civil/4'
        }
      ]
    }

  ];


  classData = {
    informationTechnology: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8']
    },
    computerScience: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6']
    },
    electrical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6']
    },
    mechanical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8']
    },
    tool: {
      classes: ['Class 1', 'Class 2', 'Class 3']
    },
    chemical: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    },
    biochemical: {
      classes: ['Class 1', 'Class 2', 'Class 3']
    },
    civil: {
      classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4']
    }
  };


  constructor() { }

  ngOnInit() {}
}
