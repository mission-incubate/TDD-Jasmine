import { Component, OnInit } from '@angular/core';
import {
	NghSubmitService,
	DrillTeam,
	RigName,
	ReportType,
	ObservationLifeSavingOptions,
	ObservationHazardIdentification,
	SafeChoiceConversation
} from '../services/ngh-submit.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-ngh-form',
	templateUrl: './ngh-form.component.html',
	styleUrls: ['./ngh-form.component.css']
})

export class NghFormComponent implements OnInit {

	nghSelectedData: any = {};
	public furtherActionRequired;
	public notHazardId = false;
	public hazardIdentificationNumber: boolean;
	location: string; hIDesc: string; hIActionTaken: string; suggestedFurtherAction: string;
	date = new FormControl(new Date());
	hazards = new FormControl();
	safeChoice = new FormControl();
	selectedFile: File;
	public dropDownOptions1 = [
		{
			'title': 'Drill Team',
			'options': [
				'Angola',
				'Guyana',
				'Indonesia',
				'Malaysia',
				'Nigeria'
			]
		}
	];

	constructor(private nghService: NghSubmitService) { }

	ngOnInit() {

	}

	nghFormSubmit() {
		this.nghService.nghSubmit(
			this.nghSelectedData[DrillTeam],
			this.nghSelectedData[RigName],
			this.nghSelectedData[ReportType],
			this.nghSelectedData[ObservationLifeSavingOptions],
			this.nghSelectedData[ObservationHazardIdentification],
			this.nghSelectedData[SafeChoiceConversation],
			this.furtherActionRequired,
			this.date.value,
			this.location,
			this.hIActionTaken,
			this.hIDesc,
			this.suggestedFurtherAction
		);
	}

	onFileChanged(event) {
		this.selectedFile = event.target.files[0];
	}

	radioSelected(event) {	}
}
