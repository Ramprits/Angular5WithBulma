import { Component, OnInit } from "@angular/core";
import { CotegoryService } from "./category.service";
import { LoggerService } from "../../core/logging.service";
import { Title } from "@angular/platform-browser";
import { ICategory } from "./ICategory";
import { TrackerError } from "../../core/tracker.error";

@Component({
  selector: "b-category",
  templateUrl: "./category.component.html"
})
export class CategoryComponent implements OnInit {
  categories: ICategory[] | TrackerError;
  constructor(
    private categoriesService: CotegoryService,
    private logger: LoggerService,
    private title: Title
  ) {
    this.title.setTitle("Categories");
  }

  ngOnInit() {
    this.GetCategories();
  }
  GetCategories() {
    this.categoriesService.getCategories().subscribe(category => {
      this.categories = category;
    });
  }
}
