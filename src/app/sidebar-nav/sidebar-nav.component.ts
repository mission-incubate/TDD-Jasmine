import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-sidebar-nav',
	templateUrl: './sidebar-nav.component.html',
	styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnDestroy {

	public sidebarOptions = [
		{
			imageURL: '',
			value: 'Nobody Get Hurt Form',
			pathURL: 'home/ngh-form'
		},
		{
			imageURL: '',
			value: 'About',
			pathURL: ''
		}
	];
	public mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	@ViewChild('snav') sidebar;

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		media: MediaMatcher,
		public 	iconRegistry: MatIconRegistry,
		public sanitizer: DomSanitizer,
		private router: Router
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		/**Applying menu icon **/
		this.iconRegistry.addSvgIcon(
			'menu', this.sanitizer.bypassSecurityTrustResourceUrl('../assets/menu.svg'));

	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	toggle(url: string) {
		if (this.mobileQuery.matches) {
			this.sidebar.toggle();
		}
		this.router.navigateByUrl(url);
	}

}



