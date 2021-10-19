import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceLocator } from '../utils/ServiceLocator';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  http: HttpClient

  baseUrl = environment.serviceUrl

  constructor() {
    this.http = ServiceLocator.injector.get(HttpClient)
  }

  private setHeaders() {
    let header = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("X-API-Key", environment.apiKey)
    // .set("Platform", "WebClient")

    return header;
  }


  private retry<T>(fn: Function): Promise<T> {
    return fn()
      .catch((err: HttpErrorResponse) => fn())
      .catch((err: HttpErrorResponse) => fn())
      .catch((err: HttpErrorResponse) => fn())
      .catch((err: HttpErrorResponse) => fn())
      .catch((err: HttpErrorResponse) => fn())
      .catch((err: HttpErrorResponse) => { console.log("Tried 5 times") })

  }


  protected get<T>(url: string, params?: any): Promise<T> {
    const options = { params: params, headers: this.setHeaders() }
    return this.retry<T>(() => this.http.get<T>(this.baseUrl + url, options).toPromise())
  }

  protected post<T>(url: string, model?: any): Promise<any> {
    // console.log(this.baseUrl)
    const options = { params: {}, headers: this.setHeaders() }
    return this.retry<T>(() => this.http.post(this.baseUrl + url, model, options).toPromise())
  }

  protected put<T>(url: string, model?: any): Promise<any> {
    // console.log(this.baseUrl)
    const options = { params: {}, headers: this.setHeaders() }
    return this.retry<T>(() => this.http.put(this.baseUrl + url, model, options).toPromise())
  }
  protected del<T>(url: string): Promise<any> {
    // console.log(this.baseUrl)
    const options = { params: {}, headers: this.setHeaders() }
    return this.retry<T>(() => this.http.delete(this.baseUrl + url, options).toPromise())
  }
}
