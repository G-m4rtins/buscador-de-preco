import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../core/services/favorites.service';
import { ResultCard } from '../../shared/components/result-card/result-card';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CommonModule, ResultCard],
  template: `
    <div class="page-container">
      <h1 class="h1" style="margin-bottom: 2rem;">Favoritos</h1>
      
      <div class="results-list" *ngIf="favoritesService.favoriteProducts().length > 0; else emptyState">
        <app-result-card 
          *ngFor="let result of favoritesService.favoriteProducts()" 
          [data]="result">
        </app-result-card>
      </div>

      <ng-template #emptyState>
        <div class="card" style="padding: 2rem; text-align: center; color: var(--text-secondary)">
          <i class="ph ph-heart" style="font-size: 3rem; margin-bottom: 1rem;"></i>
          <h2>Nenhum produto salvo</h2>
          <p>Clique no coração dos produtos na busca para salvá-los aqui.</p>
        </div>
      </ng-template>
    </div>
  `
})
export class FavoritesPage {
  favoritesService = inject(FavoritesService);
}
