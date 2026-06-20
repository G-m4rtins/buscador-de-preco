import { Injectable, signal, computed } from '@angular/core';

export interface SearchHistoryItem {
  query: string;
  category: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history = signal<SearchHistoryItem[]>([]);

  historyList = computed(() => this.history());

  addSearch(query: string, category: string) {
    // Only add if there's an actual query or specific category
    if (!query && (!category || category === 'all')) return;

    this.history.update(current => {
      // Create new item
      const newItem: SearchHistoryItem = { query, category, date: new Date() };
      
      // Remove duplicate if exists (same query and category)
      const filtered = current.filter(item => !(item.query === query && item.category === category));
      
      // Add to beginning and keep only last 20
      return [newItem, ...filtered].slice(0, 20);
    });
  }

  clearHistory() {
    this.history.set([]);
  }
}
