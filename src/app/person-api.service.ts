import { Service, computed, inject, signal, ɵIS_INCREMENTAL_HYDRATION_ENABLED } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Person, PeopleResponse, LoadStatus} from './Model/model'


@Service()
export class APIService{

  private readonly url = 'https://randomuser.me/api/?seed=cda2&results=30&nat=fr';
  private readonly http = inject(HttpClient);

  readonly persons = signal<Person[]>([]);
  etatSignal = signal<LoadStatus>("loading")
 
  constructor() {
    this.etatSignal.set("loading");
    this.getAll();
    this.etatSignal.set("ready");
  }
 
  async getAll(): Promise<Person[]> {
    try{
        // this.etatSignal.set("loading");
        // console.log(this.etatSignal());
        const response = await firstValueFrom(this.http.get<{ results: Person[] }>(this.url));
        this.persons.set(response.results);
        return response.results;
    }
    catch{
        this.etatSignal.set("error");
        // console.log(this.etatSignal());
        return [];
    }
    finally{
        // this.etatSignal.set("ready");
        // console.log(this.etatSignal());
    }
   }
}



