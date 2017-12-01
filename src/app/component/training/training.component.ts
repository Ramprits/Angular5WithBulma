import { Component, OnInit } from "@angular/core";
import { TrackerError } from "../../core/tracker.error";
import { Training } from "./training.module";
import { TrainingService } from "./training.service";
@Component({
  selector: "b-training",
  templateUrl: "./training.component.html"
})
export class TrainingComponent implements OnInit {
  trainings: Training[] | TrackerError;
  loading = false;
  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.GetTrainings();
  }
  GetTrainings() {
    this.loading = true;
    this.trainingService.GetTrainings().subscribe(
      training => {
        this.trainings = training;
      },
      err => console.log(err),
      () => (this.loading = false)
    );
  }
}
