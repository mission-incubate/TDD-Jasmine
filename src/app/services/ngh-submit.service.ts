import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const DrillTeam = 'Drill Team';
export const RigName = 'Rig Name';
export const ReportType = 'Report Type';
export const ObservationLifeSavingOptions = 'Life Saving Options';
export const ObservationHazardIdentification = 'Hazard Identification';
export const SafeChoiceConversation = 'Safe Choice Option';



@Injectable({
	providedIn: 'root'
})
export class NghSubmitService {

	constructor(
		private httpClient: HttpClient
	) { }

	nghSubmit(drillTeam: string, rigname: string, reportType: string,
		lifesaving: string, hazards: object, safeChoice: object, actionReq: boolean, date: string, location: string,
		hIActionTaken: string, hIDesc: string, suggestedFurtherAction: string) {
		const nghData = {
			'GeneralUserId': 'Richa1',
			'DrillTeam': drillTeam,
			'RigName': rigname,
			'ReportType': reportType,
			'ObservationLifeSavingOptions': lifesaving,
			'ObservationHazardIdentification': hazards,
			'Description': hIDesc,
			'ActionTaken': hIActionTaken,
			'SafeChoiceConversation': safeChoice,
			'Attachments': [
				{
					'url': 'attachmenturl'
				}
			],
			'FurtherActionRequiredToSolveTheIssue': actionReq,
			'Location': location,
			'SuggestedFurtherAction': suggestedFurtherAction,
			'Date': date
		};
		this.httpClient.post('safetycards', nghData)
			.subscribe(r => {
				console.log(r);
			});

	}
}
