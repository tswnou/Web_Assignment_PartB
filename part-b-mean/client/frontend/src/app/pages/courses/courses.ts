import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.html'
})
export class CoursesComponent implements OnInit {

  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        console.log('Courses from backend:', data);
        this.courses = data;
      },
      error: (err) => {
        console.error('Error loading courses', err);
      }
    });
  }
}
