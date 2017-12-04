import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee.model";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
@Component({
  selector: "b-employee",
  templateUrl: "./employee.component.html"
})
export class EmployeeComponent implements OnInit {
  employeeCollectionRef: AngularFirestoreCollection<Employee>;
  employees$: Observable<Employee[]>;

  constructor(private afs: AngularFirestore) {
    this.employeeCollectionRef = this.afs.collection<Employee>("employees");
    this.employees$ = this.employeeCollectionRef.valueChanges();
  }

  ngOnInit() {}
}
