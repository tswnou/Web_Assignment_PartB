import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './courses.html',
  styleUrls: ['../../../assets/css/courses.css']
})
export class CoursesComponent implements OnInit {

  menuOpen = false;

  tracks: string[] = [];
  selectedTrack = "All Tracks";

  courses: any[] = [];
  filteredCourses: any[] = [];

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getCourses().subscribe({
      next: (data: any[]) => {
        this.courses = data;
        this.filteredCourses = [...data];

        this.tracks = Array.from(new Set(data.map(c => c.category)));

        this.cdr.detectChanges();  //new
      },
      error: (err) => {
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  filterCourses() {
    if (this.selectedTrack === "All Tracks") {
      this.filteredCourses = [...this.courses];
    } else {
      this.filteredCourses = this.courses.filter(
        c => c.category === this.selectedTrack
      );
    }
  }
}
