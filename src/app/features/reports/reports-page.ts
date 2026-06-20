import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  template: `
    <div class="page-container">
      <h1 class="h1" style="margin-bottom: 2rem;">Relatórios de Preço</h1>
      <div class="card" style="padding: 2rem; text-align: center; color: var(--text-secondary)">
        <i class="ph ph-chart-line-up" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h2>Nenhum relatório disponível</h2>
        <p>Acompanhe a flutuação de preços do mercado através dos nossos gráficos.</p>
      </div>
    </div>
  `
})
export class ReportsPage {}
