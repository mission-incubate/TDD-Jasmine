import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule, MatGridTile, MatGridListModule, MatCardModule, MatExpansionModule, MatInputModule} from '@angular/material';
import {MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldControl} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
// App UI components
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { NghFormComponent } from './ngh-form/ngh-form.component';
import { LoginComponent } from './login/login.component';
import { HttpMiddleware } from './helpers/interceptor.service';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http,'http://localhost:4200/src/assets/i18n/','.json');
}
@NgModule({
	declarations: [
		AppComponent,
		SidebarNavComponent,
		NghFormComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule,
		MatListModule,
		MatFormFieldModule,
		MatOptionModule,
		BrowserAnimationsModule,
		MatSelectModule,
		MatCardModule,
		MatGridListModule,
		MatExpansionModule,
		MatInputModule,
		MatRadioModule,
		MatDatepickerModule,
		MatNativeDateModule,
		FormsModule,
		ReactiveFormsModule,
		MsAdalAngular6Module.forRoot({
			tenant: 'UTCSDevTst.onmicrosoft.com',
			clientId: '5f0b38e9-27b6-4862-ba00-0d5bf53b4fcf',
			redirectUri: 'http://localhost:4200/home',
			endpoints: {
				'https://localhost/Api/': 'xxx-bae6-4760-b434-xxx'
			},
			navigateToLoginRequestUrl: false,
			cacheLocation: 'localStorage',
		}),
    BrowserAnimationsModule,
		MatGridListModule,
		MatCardModule,		
		MatIconModule,		
		LayoutModule,
		HttpModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	providers: [AuthenticationGuard, HttpMiddleware],
	bootstrap: [AppComponent]
})
export class AppModule { }
