import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent implements OnInit {

  menuOpen = false;

  courses: any[] = [];
  filteredCourses: any[] = [];

  tracks: string[] = [
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

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: data => {
        this.courses = data;
        this.filteredCourses = data;
      },
      error: err => console.error('Error loading courses:', err)
    });
  }

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
