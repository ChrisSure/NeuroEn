import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Button } from '@neuro-en/ui';

@Component({
  imports: [RouterModule, Button],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = signal('client');
  protected welcomeMessage = computed(() => `Welcome to ${this.title()}!`);
}
