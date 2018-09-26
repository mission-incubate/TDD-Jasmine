import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
// import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { debug } from 'util';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {	
	title = 'app';	
	constructor(private adalSvc: MsAdalAngular6Service, private router: Router) {			
		console.log(this.adalSvc.userInfo);		
		this.adalSvc.acquireToken('https://graph.microsoft.com')
			.subscribe((token: string) => {
				console.log(token);
				// this.router.navigate(['ngh-form']);
			});
     
	}	

}
