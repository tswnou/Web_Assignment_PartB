import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { CourseDetailsComponent } from './pages/course-details/course-details';
import { BooksComponent } from './pages/books/books';
import { RegisterComponent } from './pages/register/register';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
];
