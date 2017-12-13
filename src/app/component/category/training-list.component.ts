import { Component, OnInit, Input } from "@angular/core";
import { ITraining } from "../training/training.module";

@Component({
  selector: "b-training-list",
  templateUrl: "./traininglist.component.html"
})
export class TrainingListComponent implements OnInit {
  @Input() trainings: ITraining[];
  constructor() {}

  ngOnInit() {}
}
