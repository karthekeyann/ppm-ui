import { ParameterSet } from "./ParameterSet";

export class Template {

  uuid: string;
  name: string;
  createdOn: string;
  modifiedBy: string;
  modifiedOn: string;
  type: string;
  createdBy: string;
  applicationID: string;
  psets: ParameterSet[];

  constructor() { }

}