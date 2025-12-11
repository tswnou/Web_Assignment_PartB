import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-details.html',
  styleUrls: ['../../../assets/css/course-details.css']

})
export class CourseDetailsComponent implements OnInit {

  course: any = null;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.api.getCourseById(id!).subscribe({
      next: (data) => this.course = data,
      error: (err) => console.error(err)
    });
  }
}
