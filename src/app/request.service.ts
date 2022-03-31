import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private httpClient: HttpClient) {
  }

  get(url: string) {
    return this.httpClient.get(url)
  };

  post(url: string, data: string) {
    return this.httpClient.post(url, data);
  };

  put(url: string, data: string) {
    return this.httpClient.put(url, data);
  };

  delete(url: string, data: string) {
    return this.httpClient.put(url, data);
  };
}
