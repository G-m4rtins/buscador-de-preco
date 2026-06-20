import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchForm } from '../../shared/components/search-form/search-form';
import { ResultCard } from '../../shared/components/result-card/result-card';
import { SearchService, ProductResult } from '../../core/services/search.service';
import { HistoryService } from '../../core/services/history.service';

@Component({
  selector: 'app-search-page',
  imports: [CommonModule, SearchForm, ResultCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage implements OnInit {
  private searchService = inject(SearchService);
  private historyService = inject(HistoryService);
  private route = inject(ActivatedRoute);
  
  results = signal<ProductResult[]>([]);
  isLoading = signal(false);
  hasSearched = signal(false);
  
  private currentOptions: any = null;
  private currentSkip = 0;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['q'] || params['cat']) {
        // Only trigger if we haven't searched yet, avoiding loop if user is just clicking around
        this.onSearch({
          query: params['q'] || '',
          category: params['cat'] || 'all',
          sort: 'relevancia'
        });
      }
    });
  }

  onSearch(options: any) {
    this.currentOptions = options;
    this.currentSkip = 0;
    
    this.historyService.addSearch(options.query, options.category);
    
    this.isLoading.set(true);
    this.hasSearched.set(true);
    
    // reset current results
    this.results.set([]);

    this.fetchData();
  }
  
  loadMore() {
    this.currentSkip += 10;
    this.isLoading.set(true);
    this.fetchData(true);
  }

  private fetchData(append = false) {
    if (!this.currentOptions) return;
    
    this.searchService.searchProducts(this.currentOptions.query, 10, this.currentSkip, this.currentOptions.category).subscribe({
      next: (data) => {
        let sorted = [...data];
        if (this.currentOptions.sort === 'menor-preco') {
          sorted.sort((a, b) => parseFloat(a.price.replace(/\./g, '').replace(',', '.')) - parseFloat(b.price.replace(/\./g, '').replace(',', '.')));
        } else if (this.currentOptions.sort === 'maior-preco') {
          sorted.sort((a, b) => parseFloat(b.price.replace(/\./g, '').replace(',', '.')) - parseFloat(a.price.replace(/\./g, '').replace(',', '.')));
        }
        
        if (append) {
          this.results.update(prev => [...prev, ...sorted]);
        } else {
          this.results.set(sorted);
        }
        
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to search', err);
        this.isLoading.set(false);
        if (!append) this.results.set([]);
      }
    });
  }
}
