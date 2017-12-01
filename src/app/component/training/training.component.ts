import { Component, OnInit } from "@angular/core";
import { TrainingService } from "./training.service";
import { ITraining } from "./ITraining";

@Component({
  selector: "b-training",
  templateUrl: "./training.component.html",
  styleUrls: ["./training.component.scss"]
})
export class TrainingComponent implements OnInit {
  trainings: ITraining[];
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
