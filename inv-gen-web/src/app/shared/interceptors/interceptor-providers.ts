import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpExceptionInterceptor } from "./http-exception/http-exception.interceptor";

export const HttpInterceptorProviders = [
 {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpExceptionInterceptor,
    multi: true,
  }
]
