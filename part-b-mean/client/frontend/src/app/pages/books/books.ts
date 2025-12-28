import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { Book } from '../../models/book';
import { Video } from '../../models/video';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './books.html',
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  videos: Video[] = [];

  categories: string[] = [];
  ALL_CATEGORIES = 'ALL';
  selectedCategory = this.ALL_CATEGORIES;

  filteredBooks: Book[] = [];
  filteredVideos: Video[] = [];

  recommendedBooks: Book[] = [];
  recommendedVideos: Video[] = [];

  loading = true;
  error = '';

  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadBooksAndVideos();
  }

  loadBooksAndVideos() {
    this.loading = true;

    this.api.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
        this.recommendedBooks = books.slice(0, 3);
        this.updateCategories();
        this.filterAll();
        this.cdr.detectChanges(); 
      },
      error: () => {
        this.error = 'Failed to load books';
        this.loading = false;
        this.cdr.detectChanges(); 
      }
    });

    this.api.getVideos().subscribe({
      next: (videos: Video[]) => {
        this.videos = videos;
        this.recommendedVideos = videos.slice(0, 3);
        this.updateCategories();
        this.filterAll();
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: () => {
        this.error = 'Failed to load videos';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  updateCategories() {
    const bookCats = this.books.map(b => b.category);
    const videoCats = this.videos.map(v => v.category);
    this.categories = Array.from(new Set([...bookCats, ...videoCats]));
  }

  filterAll() {
    if (this.selectedCategory === this.ALL_CATEGORIES) {
      this.filteredBooks = this.books;
      this.filteredVideos = this.videos;
      return;
    }
    this.filteredBooks = this.books.filter(b => b.category === this.selectedCategory);
    this.filteredVideos = this.videos.filter(v => v.category === this.selectedCategory);
  }

  getYoutubeThumbnail(url: string): string {
  if (!url) return '';

  const match = url.match(/[?&]v=([^&]+)/);
  const videoId = match ? match[1] : null;

  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : '';
}

}
