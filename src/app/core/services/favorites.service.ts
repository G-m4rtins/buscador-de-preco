import { Injectable, signal, computed } from '@angular/core';
import { ProductResult } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites = signal<Map<number, ProductResult>>(new Map());

  // Expose as array for easy iteration in the view
  favoriteProducts = computed(() => Array.from(this.favorites().values()));

  toggleFavorite(product: ProductResult) {
    if (!product.id) return;
    
    this.favorites.update(favs => {
      const newFavs = new Map(favs);
      if (newFavs.has(product.id!)) {
        newFavs.delete(product.id!);
      } else {
        newFavs.set(product.id!, product);
      }
      return newFavs;
    });
  }

  isFavorite(productId: number): boolean {
    return this.favorites().has(productId);
  }
}
