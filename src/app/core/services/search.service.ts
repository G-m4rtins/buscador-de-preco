import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface ProductResult {
  id?: number;
  store: string;
  storeLogo: string;
  storeColor: string;
  trusted: boolean;
  rating: string;
  product: string;
  details: string;
  shipping: string;
  delivery: string;
  price: string;
  paymentCondition: string;
  thumbnail: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private http = inject(HttpClient);

  getCategories(): Observable<string[]> {
    return this.http.get<any[]>('https://dummyjson.com/products/categories').pipe(
      map(categories => categories.map(c => typeof c === 'string' ? c : c.slug))
    );
  }

  searchProducts(query: string, limit: number = 10, skip: number = 0, category: string = ''): Observable<ProductResult[]> {
    let url = `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`;
    
    if (category && category !== 'all') {
      // If a category is selected and there's no text query, we can use the category endpoint.
      // If there IS a text query, dummyjson doesn't support filtering by both category AND query simultaneously well, 
      // but we will just use the category endpoint if query is empty for now.
      if (!query) {
        url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;
      }
    }
    
    return this.http.get<any>(url).pipe(
      map(response => {
        if (!response.products) return [];
        
        return response.products.map((item: any) => {
          return {
            id: item.id,
            store: item.brand || 'Store',
            storeLogo: 'ph-storefront',
            storeColor: '#2563EB',
            trusted: item.rating > 4.5,
            rating: item.rating.toFixed(1),
            product: item.title,
            details: item.description,
            shipping: item.price > 500 ? 'Frete grátis' : 'Frete R$ 15,00',
            delivery: 'Entrega em 2 a 5 dias',
            price: (item.price * 5).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
            paymentCondition: 'em até 12x sem juros',
            thumbnail: item.thumbnail,
            link: '#'
          };
        });
      })
    );
  }
}
