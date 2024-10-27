<<<<<<< HEAD
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesStore} from '../services/courses.store';
=======
import {Component, OnInit} from '@angular/core';
import {Course, sortCoursesBySeqNo} from '../model/course';
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, filter, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';
import { CourseService } from '../services/courses.service';
>>>>>>> 1-start


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private coursesStore: CoursesStore) {
=======
  beginnerCourses: Observable<Course[]>;

  advancedCourses: Observable<Course[]>;


  constructor(
    private courseService: CourseService,
    private dialog: MatDialog) {
>>>>>>> 1-start

  }

  ngOnInit() {
<<<<<<< HEAD
      this.reloadCourses();
=======


    const courses$ = this.courseService.loadAllCourses()
    .pipe(
      map( res=> {
        return res.sort(sortCoursesBySeqNo)
      }) 
    );

    this.beginnerCourses = courses$.pipe(
      map( res=> {
        return res.filter(course => course.category == "BEGINNER");
      }) 
    );

    this.advancedCourses = courses$.pipe(
      map( res=> {
        return res.filter(course => course.category == "ADVANCED");
      }) 
    );
>>>>>>> 1-start
  }

  reloadCourses() {

      this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");

      this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");
  }

}


