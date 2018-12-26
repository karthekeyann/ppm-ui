
/**
 * Model file 
 */
export interface SheduleImport {
  taskName: string;
  startDate: Date;
  frequency: string
  dayToImport: string;
  fileLocation: string;
  remarks: string;
  submitType: string;
  status: string;
}