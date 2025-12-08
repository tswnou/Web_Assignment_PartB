import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { books } from '../../../assets/js/data/books';
import { videos } from '../../../assets/js/data/videos';

import { Book } from '../../../models/book';
import { Video } from '../../../models/video';



@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.html',
  styleUrls: ['./books.css']
})
export class BooksComponent implements OnInit {

  menuOpen = false;

  categories: string[] = [
    'Computer Science',
    'Mathematics',
    'Algorithms',
    'Machine Learning',
    'Networks',
    'Cybersecurity'
  ];

  selectedCategory = 'All Categories';

  filteredBooks: Book[] = [];
  filteredVideos: Video[] = [];

  recommendedBooks: Book[] = [];
  recommendedVideos: Video[] = [];

  ngOnInit() {
    this.recommendedBooks = books.slice(0, 3);
    this.recommendedVideos = videos.slice(0, 3);

    this.filterAll();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  filterAll() {
    this.filterBooks();
    this.filterVideos();
  }

  filterBooks() {
    this.filteredBooks =
      this.selectedCategory === 'All Categories'
        ? books
        : books.filter((b: Book) => b.category === this.selectedCategory);
  }

  filterVideos() {
    this.filteredVideos =
      this.selectedCategory === 'All Categories'
        ? videos
        : videos.filter((v: Video) => v.category === this.selectedCategory);
  }
}
