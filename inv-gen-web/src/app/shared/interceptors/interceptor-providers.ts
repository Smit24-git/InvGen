import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpExceptionInterceptor } from "./http-exception/http-exception.interceptor";
import { AuthInterceptor } from "./http-auth/auth-interceptor";

export const HttpInterceptorProviders = [
 {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpExceptionInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
]
