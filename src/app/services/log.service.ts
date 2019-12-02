import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
      {id: '2', text: 'added bootstrap', date: new Date('12/27/2017 15:54:44')},
      {id: '3', text: 'added logs component', date: new Date('12/27/2017 19:11:33')}
    ];
  }

  getLogs() {
    return this.logs;
  }
}
