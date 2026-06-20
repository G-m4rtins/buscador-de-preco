import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts-page',
  standalone: true,
  template: `
    <div class="page-container">
      <h1 class="h1" style="margin-bottom: 2rem;">Alerta de Preços</h1>
      <div class="card" style="padding: 2rem; text-align: center; color: var(--text-secondary)">
        <i class="ph ph-bell-ringing" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h2>Nenhum alerta configurado</h2>
        <p>Você será avisado quando seus produtos favoritos atingirem o preço desejado.</p>
        <button class="btn-primary" style="margin-top: 1.5rem;">Criar Novo Alerta</button>
      </div>
    </div>
  `
})
export class AlertsPage {}
