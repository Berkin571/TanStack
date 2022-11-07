import { TableDataStatus } from "./TableData.config";

export interface TableProps {
  quoteNumber: number;
  adress: string;
  contractNumber: number;
  status: TableDataStatus;
}
