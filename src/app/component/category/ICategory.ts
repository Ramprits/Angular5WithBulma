import { Training } from "../index";

export interface ICategory {
  categoryId: string;
  name: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  training: Training[];
}
