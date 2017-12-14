import { Component, OnInit, Input } from "@angular/core";
import { TrackerError } from "../../core/tracker.error";
import { GetTraining } from "./training.module";
import { TrainingService } from "./training.service";
import { LoggerService } from "../../core/logging.service";
import { Title } from "@angular/platform-browser";
import { Message } from "../../core/Message";
import { pageAnimation } from "../../core/public-data";

@Component({
  selector: "b-training",
  templateUrl: "./training.component.html",
  animations: [pageAnimation]
})
export class TrainingComponent implements OnInit {
  trainings: GetTraining[] | TrackerError;
  loading = false;
  checked = false;
  isFree = false;
  msgs: Message[] = [];
  timeout: any;
  constructor(
    private trainingService: TrainingService,
    private logger: LoggerService,
    private title: Title
  ) {
    this.title.setTitle("Training List");
  }

  ngOnInit() {
    try {
      this.GetTrainings();
    } catch (error) {
      console.log(error);
    }
  }
  GetTrainings() {
    this.loading = true;
    this.trainingService.GetTrainings().subscribe(
      training => {
        this.trainings = training;
        this.logger.log("Sucessfully loaded !");
        this.msg(1, "Training loaded sucessfully");
      },
      (err: TrackerError) => this.msg(4, "Unable to load training."),
      () => (this.loading = false)
    );
  }
  addTraining() {}

  msgError(error) {
    this.msgs.push({
      severity: <any>error.split("|")[1],
      detail: <any>error.split("|")[0]
    });
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }

  msg(num, msg) {
    let type = "info";
    if (num === 1) {
      type = "success";
    } else if (num === 2) {
      type = "info";
    } else if (num === 3) {
      type = "warn";
    } else if (num === 4) {
      type = "error";
    }
    this.msgs.push({ severity: type, detail: msg });
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
}
