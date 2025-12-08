import { Routes } from '@angular/router';

// PAGES
import { HomeComponent } from './pages/home/home';
import { CoursesComponent } from './pages/courses/courses';
import { BooksComponent } from './pages/books/books';
import { AboutComponent } from './pages/about/about';
import { RegisterComponent } from './pages/register/register';
import { CourseDetailsComponent } from './pages/course-details/course-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course/:id', component: CourseDetailsComponent }, 
  { path: '**', redirectTo: '' }   // fallback route
];
