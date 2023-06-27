export interface ILabelValue {
  label: string;
  value: string;
}

export interface IDropdownValues {
  [name: string]: string | number;
}
export interface IAuditResponse {
  logId: string;
  logDate: string;
  patientId: string | null;
  patientName: string | null;
  userId: string;
  userName: string;
  action: string;
  entityId: string | undefined | null;
  logEntityType: string;
  entityType? : string | null;
  data: any;
  transmission?: string;
  pageNum?: string;
  formName?: string;
  s3Data?: string | null;
}

export interface IAuditTrailColumnDef {
  columnDef: ColumnDef[];
}

export interface ColumnDef {
  colHeader: string
  property: string,
  isSortableColumn: boolean,
  width: string,
  renderContent?: (data: any) => string | undefined
}