import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../../core/services/search.service';

export interface SearchOptions {
  query: string;
  category: string;
  sort: string;
}

@Component({
  selector: 'app-search-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm implements OnInit {
  private searchService = inject(SearchService);

  query: string = '';
  category: string = 'all';
  sort: string = 'relevancia';
  categories: string[] = [];

  @Output() search = new EventEmitter<SearchOptions>();

  ngOnInit() {
    this.searchService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.search.emit({
      query: this.query.trim(),
      category: this.category,
      sort: this.sort
    });
  }
}
