/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import MTableBody from './m-table-body';
import MTableToolbar from './m-table-toolbar';
import MTablePagination from './m-table-pagination';
import MTableHeader from './m-table-header';
import filterActions from './filterActions';
import {
  Paper, Table, TableRow,
  TableFooter, TablePagination,
  withStyles
} from '@material-ui/core';
import isEqualDate from 'date-fns/isEqual';
import formatDate from 'date-fns/format';
/* eslint-enable no-unused-vars */

class MaterialTable extends React.Component {
  constructor(props) {
    super(props);

    const calculatedProps = this.getProps(props);
    let defaultSortColumnIndex = -1;
    let defaultSortDirection = '';
    if (calculatedProps) {
      defaultSortColumnIndex = calculatedProps.columns.findIndex(a => a.defaultSort);
      defaultSortDirection = defaultSortColumnIndex > -1 ? calculatedProps.columns[defaultSortColumnIndex].defaultSort : '';
    }
    this.state = {
      columns: [],
      currentPage: 0,
      data: [],
      pageSize: calculatedProps.options.pageSize,
      renderData: [],
      searchText: '',
      selectedCount: 0,
      orderBy: defaultSortColumnIndex,
      orderDirection: defaultSortDirection,
      filterSelectionChecked: false,
      ...this.getDataAndColumns(calculatedProps)
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const dataAndColumns = this.getDataAndColumns(this.getProps(nextProps));
    this.setState(dataAndColumns);
  }

  getDataAndColumns(props) {
    const data = props.data.map((row, index) => {
      row.tableData = { id: index };
      return row;
    });

    const columns = props.columns.map((columnDef, index) => {
      columnDef.tableData = { id: index };
      return columnDef;
    });

    const renderData = this.getRenderData(data, props);
    return { data, columns, renderData };
  }

  getProps(props) {
    const calculatedProps = { ...(props || this.props) };
    calculatedProps.options = { ...MaterialTable.defaultProps.options, ...calculatedProps.options };

    return calculatedProps;
  }

  setData(data) {
    data = data || this.state.data;

    const renderData = this.getRenderData(data);
    this.setState({ data, renderData });
  }

  getRenderData = (data, props) => {
    data = data || this.state.data;
    props = this.getProps();

    let renderData = [...data];

    // App filter
    if (this.state) {
      renderData = renderData.filter(row => {
        if (this.state.filterSelectionChecked) return row.tableData.checked;
        return row.tableData;
      });

      this.state.columns.filter(columnDef => columnDef.tableData.filterValue).forEach(columnDef => {
        const { lookup, type, tableData, field } = columnDef;

        if (lookup) {
          renderData = renderData.filter(row => {
            return !tableData.filterValue ||
              tableData.filterValue.length === 0 ||
              tableData.filterValue.indexOf(row[field] && row[field].toString()) > -1;
          });
        } else if (type === 'numeric') {
          renderData = renderData.filter(row => {
            return row[field] === tableData.filterValue;
          });
        } else if (type === 'boolean' && tableData.filterValue) {
          renderData = renderData.filter(row => {
            return (row[field] && tableData.filterValue === 'checked') ||
              (!row[field] && tableData.filterValue === 'unchecked');
          });
        } else if (['date', 'datetime'].includes(type)) {
          renderData = renderData.filter(row => {
            const currentDate = row[field] ? new Date(row[field]) : null;

            if (currentDate && currentDate.toString() !== 'Invalid Date') {
              const selectedDate = tableData.filterValue;
              let currentDateToCompare = '';
              let selectedDateToCompare = '';

              if (type === 'date') {
                currentDateToCompare = formatDate(currentDate, 'MM/dd/yyyy');
                selectedDateToCompare = formatDate(selectedDate, 'MM/dd/yyyy');
              } else if (type === 'datetime') {
                currentDateToCompare = formatDate(currentDate, 'MM/dd/yyyy - HH:mm');
                selectedDateToCompare = formatDate(selectedDate, 'MM/dd/yyyy - HH:mm');
              }

              return currentDateToCompare === selectedDateToCompare;
            }

            return true;
          });
        } else if (type === 'time') {
          renderData = renderData.filter(row => {
            const currentHour = row[field] || null;

            if (currentHour) {
              const selectedHour = tableData.filterValue;
              const currentHourToCompare = formatDate(selectedHour, 'HH:mm');

              return currentHour === currentHourToCompare;
            }

            return true;
          });
        } else {
          renderData = renderData.filter(row => {
            return row[field] && row[field].toString().toUpperCase().includes(tableData.filterValue.toUpperCase());
          });
        }
      });
    }

    // Apply Search
    if (this.state && this.state.searchText) {
      renderData = renderData.filter(row => {
        let result = false;
        this.state.columns
          .filter(columnDef => { return columnDef.searchable === undefined ? !columnDef.hidden : columnDef.searchable })
          .forEach(columnDef => {
            if (columnDef.field) {
              const value = this.getFieldValue(row, columnDef);
              if (value && value.toString().toUpperCase().includes(this.state.searchText.toUpperCase())) {
                result = true;
              }
            }
          });

        return result;
      });
    }

    // Apply Sorting
    if (this.state && this.state.orderBy >= 0 && this.state.orderDirection) {
      const columnDef = this.state.columns.find(_ => _.tableData.id === this.state.orderBy);
      renderData = renderData.sort(
        this.state.orderDirection === 'desc'
          ? (a, b) => this.sort(this.getFieldValue(b, columnDef), this.getFieldValue(a, columnDef), columnDef.type)
          : (a, b) => this.sort(this.getFieldValue(a, columnDef), this.getFieldValue(b, columnDef), columnDef.type)
      );
    }
    return renderData || data;
  }

  getFieldValue(rowData, columnDef) {
    let value = rowData[columnDef.field];
    if (columnDef.lookup) {
      value = columnDef.lookup[value];
    }

    return value;
  }

  sort(a, b, type) {
    if (type === 'numeric') {
      return a - b;
    } else {
      return a < b ? -1 : a > b ? 1 : 0;
    }
  }

  onSelectionChange = () => {
    if (this.props.onSelectionChange) {
      const selectedRows = this.state.data.filter(row => row.tableData.checked);
      this.props.onSelectionChange(selectedRows);
    }
  }

  onChangePage = (...args) => {
    this.props.onChangePage(...args);
  }

  onChangeRowsPerPage = (...args) => {
    this.props.onChangeRowsPerPage(...args);
  }

  onOrderChanged = (...args) => {
    this.props.onOrderChanged(...args);
  }

  renderFooter() {
    const props = this.getProps();
    if (props.options.paging) {
      return (
        <Table>
          <TableFooter style={{ display: 'grid' }}>
            <TableRow>
              <TablePagination
                style={{ float: 'right' }}
                colSpan={3}
                count={this.state.renderData.length}
                rowsPerPage={this.state.pageSize}
                rowsPerPageOptions={props.options.pageSizeOptions}
                page={this.state.currentPage}
                onChangePage={(event, page) => {
                  this.setState({ currentPage: page }, () => {
                    this.setData();
                    this.onChangePage(event, page);
                  });
                }}
                onChangeRowsPerPage={(event) => {
                  this.setState(state => {
                    state.pageSize = event.target.value;
                    state.currentPage = 0;
                    return state;
                  }, () => {
                    this.setData();
                    this.onChangeRowsPerPage(event);
                  });
                }}
                ActionsComponent={MTablePagination}
              />
            </TableRow>
          </TableFooter>
        </Table>
      );
    }
  }

  componentDidMount() {
    this.setData();
  }

  render() {
    const props = this.getProps();

    return (
      <Paper>
        {props.options.toolbar &&
          <MTableToolbar
            actions={props.actions}
            selectedRows={this.state.selectedCount > 0 ? this.state.data.filter(a => { return a.tableData.checked }) : []}
            columns={this.state.columns}
            columnsButton={props.options.columnsButton}
            exportButton={props.options.exportButton}
            renderData={this.state.renderData}
            search={props.options.search}
            searchText={this.state.searchText}
            title={props.title}
            onSearchChanged={searchText => this.setState({ searchText }, () => this.setData())}
            onColumnsChanged={columns => this.setState({ columns })}
            localization={{ ...MaterialTable.defaultProps.localization, ...this.props.localization }}
          />
        }
        <div style={{ overflowX: 'auto' }}>
          <Table>
            <MTableHeader
              localization={{ ...MaterialTable.defaultProps.localization, ...this.props.localization }}
              columns={this.state.columns}
              hasSelection={props.options.selection}
              selectedCount={this.state.selectedCount}
              dataCount={this.state.data.length}
              showActionsColumn={props.actions && props.actions.filter(filterActions(this.props.options)).length > 0}
              orderBy={this.state.orderBy}
              orderDirection={this.state.orderDirection}
              onAllSelected={(checked) => {
                const data = this.state.renderData.map(row => {
                  row.tableData.checked = checked;
                  return row;
                });
                const selectedCount = checked ? data.length : 0;
                this.setState({ renderData: data, selectedCount }, () => this.onSelectionChange());
              }}
              onOrderChanged={(orderBy, orderDirection) => {
                this.setState({ orderBy, orderDirection, currentPage: 0 }, () => {
                  this.setData();
                  this.onOrderChanged(orderBy, orderDirection);
                });
              }}
              actionsHeaderIndex={props.options.actionsColumnIndex}
              sorting={props.options.sorting}
            />
            <MTableBody
              actions={props.actions}
              renderData={this.state.renderData}
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
              columns={this.state.columns}
              options={props.options}
              getFieldValue={this.getFieldValue}
              onFilterChanged={(columnId, value) => {
                const columns = this.state.columns;
                columns[columnId].tableData.filterValue = value;
                this.setState({ columns }, () => {
                  this.setData();
                });
              }}
              onFilterSelectionChanged={(event) => {
                const filterSelectionChecked = event.target.checked;
                const columns = this.state.columns;
                this.setState({ columns, filterSelectionChecked }, () => {
                  this.setData();
                });
              }}
              onRowSelected={(event, checked) => {
                const data = this.state.data;
                data[event.target.value].tableData.checked = checked;
                this.setState(state => ({
                  data: data,
                  selectedCount: state.selectedCount + (checked ? 1 : -1)
                }), () => this.onSelectionChange());
                this.setData();
              }}
              localization={{ ...MaterialTable.defaultProps.localization, ...this.props.localization }}
            />
          </Table>
        </div>
        {this.renderFooter()}
      </Paper>
    );
  }
}

const id = id => {};

MaterialTable.defaultProps = {
  actions: [],
  classes: {},
  columns: [],
  data: [],
  title: 'Table Title',
  options: {
    actionsColumnIndex: 0,
    columnsButton: false,
    exportButton: false,
    filtering: false,
    paging: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    search: true,
    selection: false,
    sorting: true,
    toolbar: true,
    showEmptyDataSourceMessage: true
  },
  localization: {
    actions: 'Actions',
    nRowsSelected: '{0} row(s) selected',
    emptyDataSourceMessage: 'No records to display'
  },
  onChangeRowsPerPage: id,
  onChangePage: id,
  onOrderChanged: id,
};

MaterialTable.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    icon: PropTypes.string.isRequired,
    isFreeAction: PropTypes.bool,
    tooltip: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    iconProps: PropTypes.object
  })])),
  columns: PropTypes.arrayOf(PropTypes.shape({
    cellStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    hidden: PropTypes.bool,
    field: PropTypes.string,
    lookup: PropTypes.object,
    render: PropTypes.func,
    sorting: PropTypes.bool,
    defaultSort: PropTypes.oneOf(['asc', 'desc']),
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['boolean', 'numeric', 'date', 'datetime', 'time']),
    searchable: PropTypes.bool,
    currencySetting: PropTypes.shape({
      locale: PropTypes.string,
      currencyCode: PropTypes.string,
      minimumFractionDigits: PropTypes.number,
      maximumFractionDigits: PropTypes.number
    })
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  options: PropTypes.shape({
    actionsColumnIndex: PropTypes.number,
    columnsButton: PropTypes.bool,
    exportButton: PropTypes.bool,
    filtering: PropTypes.bool,
    paging: PropTypes.bool,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    search: PropTypes.bool,
    selection: PropTypes.bool,
    sorting: PropTypes.bool,
    toolbar: PropTypes.bool,
    showEmptyDataSourceMessage: PropTypes.bool
  }),
  localization: PropTypes.shape({
    actions: PropTypes.string,
    nRowsSelected: PropTypes.string,
    emptyDataSourceMessage: PropTypes.string
  }),
  onSelectionChange: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  onChangePage: PropTypes.func,
  onOrderChanged: PropTypes.func,
};

export default MaterialTable;
