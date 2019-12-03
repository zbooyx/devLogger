import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';
import { Log } from '../../models/log';
import * as uuid from 'uuid';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) {
  }

  ngOnInit() {

    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const newLog = {
        id: uuid.v4(),
        text: this.text,
        date: new Date()
      };
      console.log(newLog);
      this.logService.addLog(newLog);
    } else {
      // create log to be updated
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };
      // Update Log
      this.logService.updateLog(updLog);
    }
    // clear the state
    this.clearState();

  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
  }

}
