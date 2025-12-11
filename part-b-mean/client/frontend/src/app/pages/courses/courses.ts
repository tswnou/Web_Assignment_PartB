import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';   // ✅ ΠΡΟΣΘΗΚΗ

import { courses, Course } from '../../../assets/js/data/courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule        // ✅ ΠΡΟΣΘΗΚΗ
  ],
  templateUrl: './courses.html'
})
export class CoursesComponent implements OnInit {

  menuOpen = false;

  tracks = [
    "All Tracks",
    "Data Science & Applied Math",
    "Operations Research",
    "Applied Mathematics",
    "Theoretical Computer Science",
    "Systems & Networks",
    "Software Systems",
    "Data & Knowledge Management",
    "Cybersecurity"
  ];

  selectedTrack = "All Tracks";

  courses: Course[] = courses;
  filteredCourses: Course[] = [...courses];

  ngOnInit() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  filterCourses() {
    if (this.selectedTrack === "All Tracks") {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(
        c => c.category === this.selectedTrack
      );
    }
  }
}
