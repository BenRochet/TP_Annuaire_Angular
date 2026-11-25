import { Component, signal, inject, input } from '@angular/core';
import { Person, PeopleResponse, LoadStatus } from '../Model/model';


@Component({
  imports: [],
  selector: 'app-card-persons',
  styleUrl: './card-persons.css',
  templateUrl: './card-persons.html',
})


export class CardPersons {
  person = input.required<Person>();
}
