/**
 * New typescript file
 */
import { ParameterSet } from './parameterSets';
export interface Template {
  uuid: string;
  name: string;
  type: string;
  createdBy: string;
  createdOn: Date;
  modifiedBy: string;
  modifiedOn: Date;
  psets: ParameterSet[];
  _links: any;
  templates: any;
}
