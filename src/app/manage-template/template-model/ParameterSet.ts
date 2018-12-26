import { Company } from './Company';

export class ParameterSet {

  uuid ? : string;
  templateUUID ? : string;
  number ? : number;
  name ? : string;
  application ? : string;
  applicationID ? : string;
  companies ? : Company[];
  companyID ? : string
  effectiveDate ? : string;
  createdOn ? : Date;
  createdBy ? : string;
  modifiedOn ? : Date;
  modifiedBy ? : string;

  constructor() { }

}