import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import {
  BackendResponseErrorMessages,
  BackendResponseStatusCodes,
} from '@appModule/variables/backend.variables';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  public constructor() {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.warn(request);
    return next.handle(request).pipe(
      catchError((error) => {
        console.warn(error);
        return this._handleError(error);
      })
    );
  }

  private _handleError(request: HttpErrorResponse): Observable<never> {
    switch (request.status) {
      case BackendResponseStatusCodes.InternalServerError:
        return throwError(
          () => BackendResponseErrorMessages.internalServerError
        );
      default:
        return throwError(() => BackendResponseErrorMessages.default);
    }
  }
}
