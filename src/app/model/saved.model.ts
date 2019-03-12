export class Save {

  id: string;
  status: number;
  title: string;
  fields: string[];
  statementID: string;

  constructor(id: string, status: number, title: string, fields: string[], statementID: string,) {
    this.id = id;
    this.status = status;
    this.title = title;
    this.fields = fields;
    this.statementID = statementID;
  }

}
