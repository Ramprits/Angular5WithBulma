import { Training } from "../index";

export interface ICategory {
  categoryId: string;
  name: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  training: Training[];
}
export class Category {
  public categoryId?: "";
  public name?: "";
  public description?: "";
  public imageUrl?: "";
  public isActive?: false;
}
