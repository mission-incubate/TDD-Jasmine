import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
	API_URL  =  '';

	constructor(private httpClient: HttpClient) {}
	oauthLogin(username: string, password: string) {
		const loginData = {
			'username': username,
			'password': password
		};
		this.httpClient.post(this.API_URL, loginData);
	}
}
