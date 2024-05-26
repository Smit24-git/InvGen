import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  private messageSub = new Subject<Message>();

  toastMessage$ = this.messageSub.asObservable();
  constructor() { }

  showSuccess(summary:string, detail:string){
    let msg:Message = { severity: 'success', summary:summary, detail: detail }
    this.messageSub.next(msg);
  }

  showWarning(summary:string, detail:string){
    let msg:Message = { severity: 'warn', summary:summary, detail: detail }
    this.messageSub.next(msg);
  }

  showError(summary:string, detail:string){
    let msg:Message = { severity: 'error', summary:summary, detail: detail }
    this.messageSub.next(msg);
  }
}
