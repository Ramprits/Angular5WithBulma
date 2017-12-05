export interface ITraining {
  trainingId: string;
  name: string;
  description: string;
  isActive: boolean;
  isFree: boolean;
  startDate: Date;
  averageCost: number;
  concernedPublic: string;
  educationalObjectives: string;
  othersEducationalObjectives: string;
  durationInDays: number;
  location: string;
  externalLinks: string;
  language: string;
  isApproved: boolean;
  isCPF: boolean;
  businessUnitId: string;
  modalityId: string;
  organizationId: string;
  categoryId: string;
  createdDate: Date;
}

export class GetTraining {
  name: string;
  description: string;
  isActive: boolean;
  isFree: boolean;
  averageCost: Number;
  concernedPublic: string;
  businessUnitName: string;
  modalityName: string;
  organizationName: string;
}
