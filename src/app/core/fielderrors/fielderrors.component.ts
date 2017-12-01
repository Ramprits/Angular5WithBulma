import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "b-fielderrors",
  templateUrl: "./fielderrors.component.html"
})
export class FielderrorsComponent implements OnInit {
  @Input("form") form: FormGroup;
  // tslint:disable-next-line:no-input-rename
  @Input("field") fieldName: string;
  // tslint:disable-next-line:no-input-rename
  @Input("nicename") niceName: string;

  constructor() {}

  ngOnInit() {}
  fieldErrors(field: string) {
    const controlState = this.form.controls[field];
    return controlState.dirty && controlState.errors
      ? controlState.errors
      : null;
  }
}
