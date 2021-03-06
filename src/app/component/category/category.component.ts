import { Component, OnInit } from "@angular/core";
import { CotegoryService } from "./category.service";
import { LoggerService } from "../../core/logging.service";
import { Title } from "@angular/platform-browser";
import { ICategory, Category } from "./ICategory";
import { TrackerError } from "../../core/tracker.error";
import { Router } from "@angular/router";
import { pageAnimation } from "../../core/public-data";

@Component({
  selector: "b-category",
  templateUrl: "./category.component.html",
  animations: [pageAnimation]
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] | TrackerError;
  category: Category = new PrimeCategory();
  constructor(
    private categoriesService: CotegoryService,
    private logger: LoggerService,
    private title: Title,
    private router: Router
  ) {
    this.title.setTitle("Categories");
    this.GetCategories();
  }

  ngOnInit() {}
  GetCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((category: ICategory[]) => {
        this.categories = category;
      });
  }

  cloneCar(c: Category): Category {
    const category = new PrimeCategory();
    // tslint:disable-next-line:forin
    for (const prop in category) {
      category[prop] = category[prop];
    }
    return category;
  }
}
class PrimeCategory implements Category {
  constructor(
    public categoryId?,
    public name?,
    public description?,
    public imageUrl?,
    public isActive?
  ) {}
}
