import { ITraining } from "../index";

export interface ICategory {
  categoryId: string;
  name: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  training: ITraining[];
}
