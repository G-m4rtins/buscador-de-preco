import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HistoryService } from '../../core/services/history.service';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-container">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1 class="h1">Histórico de Busca</h1>
        <button class="btn-outline" (click)="historyService.clearHistory()" *ngIf="historyService.historyList().length > 0">Limpar Histórico</button>
      </div>
      
      <div class="card" style="padding: 2rem; text-align: center; color: var(--text-secondary)" *ngIf="historyService.historyList().length === 0; else historyList">
        <i class="ph ph-clock-counter-clockwise" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h2>Nenhuma busca recente</h2>
        <p>Suas pesquisas anteriores aparecerão aqui.</p>
      </div>

      <ng-template #historyList>
        <div class="results-list" style="display: flex; flex-direction: column; gap: 1rem;">
          <div *ngFor="let item of historyService.historyList()" class="card" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem;">
            <div>
              <h3 style="margin-bottom: 0.25rem;">{{ item.query || 'Pesquisa sem texto' }}</h3>
              <p class="text-secondary text-sm">Categoria: {{ item.category === 'all' ? 'Qualquer' : item.category }} • {{ item.date | date:'short' }}</p>
            </div>
            <button class="btn-primary" style="padding: 0.5rem 1rem;" (click)="repeatSearch(item)">Repetir Busca</button>
          </div>
        </div>
      </ng-template>
    </div>
  `
})
export class HistoryPage {
  historyService = inject(HistoryService);
  private router = inject(Router);

  repeatSearch(item: any) {
    this.router.navigate(['/'], { queryParams: { q: item.query, cat: item.category } });
  }
}
