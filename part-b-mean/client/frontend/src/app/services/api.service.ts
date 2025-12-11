import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // ----- COURSES -----
  getCourses(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/courses`);
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/courses/${id}`);
  }

  // ----- BOOKS -----
  getBooks(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/books`);
  }

  // ----- VIDEOS -----
  getVideos(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/videos`);
  }

  // ----- REGISTER USER -----
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/users`, data);
  }
}
