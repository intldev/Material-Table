import * as React from 'react';
import { IconProps } from '@material-ui/core/Icon';

export interface MaterialTableProps {
  actions?: (Action | ((rowData:any) => Action)) [];
  columns: Column[];
  components?: Components;
  icons?: Icons,
  data: object;
  title: string;
  options?: Options;
  localization?: Localization;
  onSelectionChange?: (data: any[]) => void;
  onChangeRowsPerPage?: (pageSize: number) => void;
  onChangePage?: (page: number) => void;
  onOrderChange?: (orderBy: columnId, orderDirection: "asc" | "desc") => void;
}

export interface Action {
  icon: string | React.ReactElement;
  isFreeAction?: boolean;    
  tooltip?: string;
  onClick: (event: any, data: any) => void;
  iconProps?: IconProps
}

export interface Column {
  cellStyle?: any | ((data: any) => any);
  hidden?: boolean;
  field?: string;
  filtering?: boolean,
  lookup?: object;
  render?: (data:any) => any;
  sorting?: boolean;
  defaultSort?: 'asc' | 'desc';
  title: string;
  type?: 'boolean' | 'numeric' | 'date' | 'datetime' | 'time';
  searchable?: boolean;
  currencySetting?:{ locale?: string,currencyCode?: string,minimumFractionDigits?:number,maximumFractionDigits?:number};
}

export interface Components {
  Actions: React.ReactElement;
  Body: React.ReactElement;
  Cell: React.ReactElement;
  FilterRow: React.ReactElement;
  Header: React.ReactElement;
  Pagination: React.ReactElement;
  Row: React.ReactElement;
  Toolbar: React.ReactElement;
}

export interface Icons {
  Check: React.ReactElement;
  Export: React.ReactElement;
  Filter: React.ReactElement;
  FirstPage: React.ReactElement;
  LastPage: React.ReactElement;
  NextPage: React.ReactElement;
  PreviousPage: React.ReactElement;
  Search: React.ReactElement;
  ThirdStateCheck: React.ReactElement;
  ViewColumn: React.ReactElement;
}

export interface Options {
  actionsColumnIndex?:number;
  columnsButton?: boolean;
  emptyRowsWhenPaging?: boolean;
  exportButton?: boolean;
  filtering?: boolean;
  paging?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  showEmptyDataSourceMessage?:boolean;
  search?: boolean;
  selection?: boolean;
  sorting?: boolean;
  toolbar?: boolean;
}

export interface Localization {
  actions?: string;
  nRowsSelected?: string;
  emptyDataSourceMessage?:string;
}

declare const MaterialTable: React.ComponentType<MaterialTableProps>;
export default MaterialTable;