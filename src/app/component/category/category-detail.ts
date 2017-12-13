import { Component, OnInit } from "@angular/core";
import { CotegoryService } from "./category.service";
import { ActivatedRoute } from "@angular/router";
import { ICategory } from "./ICategory";
import { TrackerError } from "../../core/tracker.error";

@Component({
  selector: "b-categorydetail",
  templateUrl: "./categoryDetail.component.html"
})
export class CategoryDetailComponent implements OnInit {
  category: ICategory;
  constructor(
    private categoryService: CotegoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryService
      .getCategorie(this.activatedRoute.snapshot.params["categoryId"])
      .subscribe(category => {
        this.category = category;
      });
  }
}
