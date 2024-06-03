import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { BaseResponse } from '../../responses/base-response.model';
import { Observable, tap } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { ToastMessageService } from 'src/app/components/toast-message/toast-message.service';


@Injectable()
export class HttpExceptionInterceptor implements HttpInterceptor {

  toastMsgService = inject(ToastMessageService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap({
      next: ($event: any) => {
        if(! ($event instanceof HttpResponse)) return;
        if($event.ok) return;
  
        const res =  $event.body as BaseResponse;
        if(res.isSuccess) return;
        
        if(res.Errors && res.Errors.length>0)
          this.toastMsgService.showWarning("Warning",res.Errors.join('\n'));
        else if(res.Message)
          this.toastMsgService.showWarning("Warning",res.Message);
        else
          this.toastMsgService.showWarning("Warning","Something went wrong. Please try again later.");
      },
      error: (err) => {
        console.log(err);
        switch(err.status){
          case 404: //not found
            this.toastMsgService.showWarning("Warning",(err.error?.error));
           break;
          case 400: //bad request
            const errorDetails = err.error;
            this.toastMsgService.showWarning("Warning", errorDetails.Errors?.join('\n') || err.Message);
            break;
          default: //internal server, etc...
            this.toastMsgService.showError('Error', 'Something Went Wrong. Please try again.');
            break;
        }
      }
    }));
  }
  
};



