import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Coin } from '../models';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private apiService: ApiService) { }
  get(slug: string): Observable<Coin[]>{
    return this.apiService.get(`/CoinSummary/${slug}`);
  }
}
