import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { courses, Course } from '../../../assets/js/data/courses';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-details.html'
})
export class CourseDetailsComponent implements OnInit {

  menuOpen = false;
  course: Course | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.course = courses.find(c => c.id === id);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
