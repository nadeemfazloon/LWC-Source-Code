import { LightningElement, track } from 'lwc';

export default class StudentForm extends LightningElement {

    @track studentName = "John Doe";
    @track favSubject = "Chemistry";

    changeStudentName(event){

        this.studentName = event.target.value;

    }

    changeFavSubject(event){

        this.favSubject = event.target.value;

    }
    

}