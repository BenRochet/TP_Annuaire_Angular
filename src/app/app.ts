import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { APIService } from './person-api.service';
import { CardPersons } from './card-persons/card-persons';

@Component({
  imports: [RouterOutlet, Header, CardPersons],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Annuaire de Benjamin');
  apiService = inject(APIService);

  idLoad = this.apiService.etatSignal()
  readonly count = computed(() => this.apiService.persons().length);
  readonly persons = computed(() => this.apiService.persons());


}
