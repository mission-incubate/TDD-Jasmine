import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class InterceptedHttp implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
		return next.handle(this.getBaseUrl(req))
			.pipe(tap(res => {
				if (res instanceof HttpResponse) {
					console.warn('Response ::', res);
				}
			}, err => {
				console.warn('Error Response ::', err);
			}));
	}

	private getBaseUrl(req: HttpRequest<any>): HttpRequest<any> {
        if (config.allowAll && req.url.indexOf('http') !== -1 || config.allowAll && req.url.indexOf('https') !== -1 ) {
            return req;
        }
        return req.clone({ url: config.baseURL + req.url });
    }
}


export const HttpMiddleware = {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptedHttp,
    multi: true,
};
