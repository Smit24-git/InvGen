import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, MessageService } from 'primeng/api';
import { ToastMessageService } from './toast-message.service';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss',
  providers: [MessageService],
})
export class ToastMessageComponent {
  constructor(
    private messageService:MessageService,
    private toastMessageService:ToastMessageService,
  ){
    this.initSubs();
  }

  private initSubs() {
    this.toastMessageService.toastMessage$.subscribe((msg:Message)=>{
      this.messageService.add(msg);
    });
  }
}
