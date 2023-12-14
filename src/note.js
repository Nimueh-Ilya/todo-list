export class note {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  editNote(title, description) {
    this.title = title;
    this.description = description;
  }
  removeNote() {
    console.log("remove note");
  }
}
