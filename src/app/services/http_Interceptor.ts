import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { error } from 'console';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add new headers or modify existing ones
    console.log('datacheck',req)
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer my-token',
      },
    });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
            console.error('Error intercepted:', error);
            if(error.status === 401){
                alert('undefined request. login error')
            }
            return throwError(()=> new Error( 'an error occured,please truy again'))
        })
        
    )
  }
}
