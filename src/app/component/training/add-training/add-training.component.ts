import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { FormGroup, Validators } from "@angular/forms";
import { ITraining } from "../training.module";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "b-add-training",
  templateUrl: "./add-training.component.html"
})
export class AddTrainingComponent implements OnInit {
  AddTraining: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle("New Training");
  }
  ngOnInit() {
    this.BuildTrainingForm();
  }

  private BuildTrainingForm() {
    this.AddTraining = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      isActive: false,
      isFree: false,
      startDate: ["", []],
      averageCost: 0,
      concernedPublic: ["", []],
      educationalObjectives: ["", []],
      othersEducationalObjectives: ["", []],
      durationInDays: 0,
      location: ["", []],
      externalLinks: ["", []],
      language: ["EN", []],
      isApproved: true,
      isCPF: false,
      businessUnitId: ["", []],
      modalityId: ["", [Validators.required]],
      organizationId: ["", [Validators.required]],
      categoryId: ["", [Validators.required]],
      createdDate: ["", []]
    });
  }
  onSubmit(formData) {}
}
