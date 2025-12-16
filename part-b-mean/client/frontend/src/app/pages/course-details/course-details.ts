import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-details.html'
  // ΔΕΝ βάζουμε styleUrls εδώ, τα styles έρχονται global από course-details.css
})
export class CourseDetailsComponent implements OnInit {

  course: any | null = null;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage = 'Course id was not provided.';
      this.isLoading = false;
      return;
    }

    this.api.getCourseById(id).subscribe({
      next: (data) => {
        this.course = data;
        this.isLoading = false;
        this.cdr.detectChanges(); //
      },
      error: () => {
        this.errorMessage = 'Could not load course details.';
        this.isLoading = false;
      }
    });
  }
}

