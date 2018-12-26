import { Company } from './Company';

/**
 * ParameterSets interface 
 */

export interface ParameterSet {
    number ? : number;
    name ? : string;
    applicationID ? : string;
    companies ? : Company[];
    companyID ? : string;
    selected ? : boolean;
    effectiveDate ? : Date;
}
