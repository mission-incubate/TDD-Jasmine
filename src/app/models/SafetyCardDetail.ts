import { Attachment } from "src/app/models/Attachments";

export interface ISafetyCardDetail {
	EmailAddress: String;
	GeneralUserId: String;
	DrillTeam: String;
	RigName: String;
	ReportType: String;
	ObservationLifeSavingOptions: String;
	ObservationHazardIdentification: String[];
	Description: String;
	ActionTaken: String;
	SafeChoiceConversation: String[];
	Attachments: Attachment[];
	FurtherActionRequiredToSolveTheIssue: Boolean;
	Location: String;
	SuggestedFurtherAction: String;
	Date: Date;
	id: String;
	//userId: number;
	//id: number;
	//title: string;
	//body: string;
}
