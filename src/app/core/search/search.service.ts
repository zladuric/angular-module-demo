import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  filter$: BehaviorSubject<string> = new BehaviorSubject('');
}
