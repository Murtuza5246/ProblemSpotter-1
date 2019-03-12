// @ts-ignore
import Timestamp = firebase.firestore.Timestamp;

export class Statement {

  id: string;
  title: string;
  date: Timestamp;
  description: string;
  field: Array<string>;
  status: number;
  uploaderUID: string;

  contents?: Array<Content>;

  constructor(id: string, title: string, date: Timestamp, description: string, field: Array<string>, status: number, uploaderUID: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.description = description;
    this.field = field;
    this.status = status;
    this.uploaderUID = uploaderUID;
  }

}

interface Content {
  isPhoto: boolean;
  url: string;
  name: string;
}
