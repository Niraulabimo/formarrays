import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  studentForm: FormGroup = new FormGroup({
    studentList: new FormArray([this.getStudentFields()]),
  });

  getStudentFields(): FormGroup {
    return new FormGroup({
      student_name: new FormControl(''),
      student_class: new FormControl(''),
      student_age: new FormControl(''),
      studentSubjects: new FormGroup({
        studentSubjectArray: new FormArray([this.putNewSubject()]),
      }),
    });
  }
  studentListArray() {
    return this.studentForm.get('studentList') as FormArray;
  }
  addStudent() {
    this.studentListArray().push(this.getStudentFields());
  }
  removeStudent(i: number) {
    this.studentListArray().removeAt(i);
  }
  getFormData() {
    console.log(this.studentForm.value);
  }
  subjectsFormGroup(i: number) {
    return this.studentListArray().at(i).get('studentSubjects') as FormGroup;
  }
  subjectsArray(i: number) {
    return this.subjectsFormGroup(i).get('studentSubjectArray') as FormArray;
  }
  addNewSubject(i: number) {
    this.subjectsArray(i).push(this.putNewSubject());
  }
  putNewSubject() {
    return new FormGroup({
      subject: new FormControl(''),
      marks: new FormControl(''),
    });
  }
  removeNewSubject(i: number, j: number) {
    this.subjectsArray(i).removeAt(j);
  }
}
