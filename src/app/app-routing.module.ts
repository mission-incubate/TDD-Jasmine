import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// App components
import { NghFormComponent } from './ngh-form/ngh-form.component';
import { LoginComponent } from './login/login.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';

const routes: Routes = [
	{ path: '', component: LoginComponent, pathMatch: 'full' },
	{
		path: 'home', component: SidebarNavComponent,
		children: [
			{ path: '', component: NghFormComponent, pathMatch: 'full' },
			{ path: 'ngh-form', redirectTo: '' },
		]
	}
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
	constructor() {
		// this.router.navigate(['login-module']);
	}
}
