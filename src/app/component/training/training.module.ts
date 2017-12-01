// export interface ITraining {
//   trainingId: string;
//   Name: string;
//   Description: string;
//   IsActive: boolean;
//   IsFree: boolean;
//   StartDate;
//   AverageCost: Number;
//   ConcernedPublic: string;
//   EducationalObjectives: string;
//   OthersEducationalObjectives: string;
//   DurationInDays: Number;
//   Location: string;
//   ExternalLinks: string;
//   Language: string;
//   IsApproved: boolean;
//   IsCPF: boolean;
//   BusinessUnitId: string;
//   ModalityId: string;
//   OrganizationId: string;
//   CategoryId: string;
// }

export class Training {
  Id: Number;
  Name: string;
  Description: string;
  Cost: Number;
  comments: string;
}
