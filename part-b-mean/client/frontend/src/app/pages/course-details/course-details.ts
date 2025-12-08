import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.html',
  //styleUrls: ['./course-details.css']
})
export class CourseDetailsComponent implements OnInit {

  menuOpen = false;
  course: any = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.courseService.getCourseById(id).subscribe({
        next: data => this.course = data,
        error: err => console.error("Error loading course:", err)
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
