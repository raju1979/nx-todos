import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Select, Store,  Actions, ofActionErrored} from '@ngxs/store';

// import { AuthenticationService } from '@app/_services';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private store: Store) { 
      console.log('this is interceptor');
      this.store.selectSnapshot<any>((state: any) => {
          console.log('select state', state.app)
        });
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('inside intercept');
        // add authorization header with basic auth credentials if available
        let currentUser = localStorage.getItem('token');
        console.log(currentUser);
        if (currentUser) {
            currentUser = currentUser.replace('\"', "");
            console.log('inside intercept if');

            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}