import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClassComponent } from './components/class/class.component';
import { NavbarSetupComponent } from './components/navbar-setup/navbar-setup.component';
import { StreamsComponent } from './components/streams/streams.component';
import { UserComponent } from './components/user/user.component';
import { NotificationComponent } from './components/notification/notification.component';
import { DetailedAttendanceComponent } from './components/detailed-attendance/detailed-attendance.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { StudentComponent } from './components/student/student.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import { SemesterResultsComponent } from './components/semester-results/semester-results.component';
import { OverallResultsComponent } from './components/overall-results/overall-results.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    ClassComponent,
    NavbarSetupComponent,
    StreamsComponent,
    UserComponent,
    NotificationComponent,
    DetailedAttendanceComponent,
    HomeComponent,
    StudentComponent,
    SemesterResultsComponent,
    OverallResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatIconModule,
    MatRippleModule,
    MatTabsModule,
    MatExpansionModule,
    RouterModule.forRoot([

      // routes for anonymous users
      {path: '', component:  HomeComponent},
      {path: 'stream/:stream', component: StreamsComponent},
      {path: 'stream/:stream/:classId', component: ClassComponent},
      {path: 'stream/:stream/:classId/:studentId', component: StudentComponent},
      {path: 'notifications', component: NotificationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
