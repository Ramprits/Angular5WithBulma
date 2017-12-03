import { Component, OnInit, Input } from "@angular/core";
import { TrackerError } from "../../core/tracker.error";
import { Training } from "./training.module";
import { TrainingService } from "./training.service";
import { LoggerService } from "../../core/logging.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "b-training",
  templateUrl: "./training.component.html"
})
export class TrainingComponent implements OnInit {
  trainings: Training[] | TrackerError;
  loading = false;
  @Input() training: Training;
  constructor(
    private trainingService: TrainingService,
    private logger: LoggerService,
    private title: Title
  ) {
    this.title.setTitle("Training List");
  }

  ngOnInit() {
    this.GetTrainings();
  }
  GetTrainings() {
    this.loading = true;
    this.trainingService.GetTrainings().subscribe(
      training => {
        this.trainings = training;
        this.logger.log("Sucessfully loaded !");
      },
      (err: TrackerError) => console.log(err.errorNumber),
      () => (this.loading = false)
    );
  }
}
