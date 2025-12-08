import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { books } from '../../../assets/data/books';
import { videos } from '../../../assets/data/videos';

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

  filteredBooks = [];
  filteredVideos = [];

  recommendedBooks = [];
  recommendedVideos = [];

  ngOnInit() {
    this.recommendedBooks = books.filter(b => b.recommended);
    this.recommendedVideos = videos.filter(v => v.recommended);

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
        : books.filter(b => b.category === this.selectedCategory);
  }

  filterVideos() {
    this.filteredVideos =
      this.selectedCategory === 'All Categories'
        ? videos
        : videos.filter(v => v.category === this.selectedCategory);
  }
}
