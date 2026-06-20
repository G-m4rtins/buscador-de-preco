import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductResult } from '../../../core/services/search.service';
import { FavoritesService } from '../../../core/services/favorites.service';

@Component({
  selector: 'app-result-card',
  imports: [CommonModule],
  templateUrl: './result-card.html',
  styleUrl: './result-card.css',
})
export class ResultCard {
  @Input({ required: true }) data!: ProductResult;

  private favoritesService = inject(FavoritesService);

  toggleFavorite() {
    if (this.data) {
      this.favoritesService.toggleFavorite(this.data);
    }
  }

  isFavorite(): boolean {
    return this.data.id ? this.favoritesService.isFavorite(this.data.id) : false;
  }
}
