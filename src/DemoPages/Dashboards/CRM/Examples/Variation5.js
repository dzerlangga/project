import React, { Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody, Button, ButtonGroup,
    CustomInput, UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ReactTable from "react-table";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search , ColumnToggle } from 'react-bootstrap-table2-toolkit';


const Designation = [
    { name: 'CEO', id_t: 7, id: 7, jumlah: 100, isChecked: false },
    { name: 'Teknikal Lead', id_t: 8, id: 8, jumlah: 40, isChecked: false },
    { name: 'Scrum Master', id_t: 9, id: 9, jumlah: 30, isChecked: false },
    { name: 'FronEnd Lead Programmer', id_t: 10, id: 10, jumlah: 100, isChecked: false },
    { name: 'BackEnd Programer', id_t: 2, id: 2, jumlah: 50, isChecked: false },
    { name: 'Intership', id_t: 1, id: 1, jumlah: 100, isChecked: false },
    { name: 'Android Programer', id_t: 3, id: 3, jumlah: 80, isChecked: false },
    { name: 'Technical Writter', id_t: 4, id: 4, jumlah: 100, isChecked: false },
    { name: 'deni', id_t: 5, id: 5, jumlah: 100, isChecked: false },



]

const defaultSorted = [{
    dataField: 'name',
    order: 'desc'

}];


const sizePerPageRenderer = ({
    options,
    currFirstPageText,
    onSizePerPageChange
}) => (
        <div className="btn-group" role="group">
            {
                options.map((option) => {
                    const isSelect = currFirstPageText === `${option.page}`;
                    return (
                        <button
                            key={option.text}
                            type="button"
                            onClick={() => onSizePerPageChange(option.page)}
                            className={`btn ${isSelect ? 'btn-secondary' : 'btn-warning'}`}
                        >
                            {option.text}
                        </button>
                    );
                })
            }
        </div>
    );



const options = {
    custom: true,
    sizePerPageRenderer,
    totalSize: Designation.length,
    paginationSize: 'hidden',
    pageStartIndex: 0,
    firstPageText: 'First',
    nextPageText: 'Next',
    prePageText: 'Previous',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    hideSizePerPage: 'hidden',
    alwaysShowAllBtns: 'hidden',
    sizePerPageList: [{
        value: 5
    }],

};

export default class DataTableFixedHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desig: Designation,
            checkbox: [],
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.renderEditable = this.renderEditable.bind(this);
    }

    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const desig = [...this.state.desig];
                    desig[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ desig });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.desig[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    onRadioBtnClick(rSelected, value) {
        this.setState({ rSelected });
        console.log(value)
    }

    cek(value) {
        this.setState({
            checkbox: this.state.checkbox.concat(value)
        })
        console.log(this.state.checkbox)
    }

    oke(value) {
        console.log(value)
    }
    

    render() {
        const { desig } = this.state;
        const { SearchBar } = Search;
        const { ToggleList } = ColumnToggle;
        const expandRow = {
            renderer: row =>( 
                desig.map(el => (
                    <p>{el.id}</p>
                ))
            ), 
            showExpandColumn: true
        };
        const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Custom table</h3>;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>

                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <div style={{ paddingBottom: '10px' }}>
                                        <Button className="btn-dashed" color="primary">
                                            Tambah Data
                                            </Button>
                                    </div>
                                    <PaginationProvider
                                        pagination={paginationFactory(options)}
                                    >
                                        {
                                            ({
                                                paginationProps,
                                                paginationTableProps
                                            }) => (
                                                    <div className="table-responsive">
                                                        <CaptionElement/>
                                                        <ToolkitProvider
                                                            bootstrap4
                                                            keyField="id"  
                                                            condensed
                                                            columnToggle
                                                            columns={[
                                                                // {
                                                                //     dataField: 'id_t',
                                                                //     sort: true,
                                                                //     // formatter:row => {
                                                                //     //     return(
                                                                //     //         <div>
                                                                //     //             <CustomInput type="checkbox" id={row} />
                                                                //     //         </div>
                                                                //     //     );
                                                                //     // }

                                                                // },
                                                                {
                                                                    dataField: 'id',
                                                                    text: 'Product ID',
                                                                    sort: true,
                                                                    events: {
                                                                        onClick: (e, column, columnIndex, row, rowIndex) => {
                                                                            console.log(e);
                                                                            console.log(column);
                                                                            console.log(columnIndex);
                                                                            console.log(row);
                                                                            console.log(rowIndex);
                                                                            alert(row.id);
                                                                        }
                                                                    }

                                                                },
                                                                {
                                                                    dataField: 'name',
                                                                    text: 'Product Name',
                                                                    sort: true,
                                                                },
                                                                {
                                                                    dataField: 'jumlah',
                                                                    text: 'Jumlah',
                                                                    sort: true,
                                                                    align: 'center',

                                                                },
                                                                {
                                                                    dataField: 'jumlah',
                                                                    isDummyField: false,
                                                                    align: 'center',
                                                                    text: 'jumlah Info',
                                                                    formatter: row => {
                                                                        if (row >= 50) {
                                                                            return (
                                                                                <div className="d-block w-100 text-center">
                                                                                    <span className="badge badge-success"> Completed</span>
                                                                                </div>
                                                                            );
                                                                        } else {
                                                                            return (
                                                                                <div className="d-block w-100 text-center">
                                                                                    <span className="badge badge-danger"> Uncompleted</span>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    dataField: 'actions',
                                                                    isDummyField: true,
                                                                    align: 'center',
                                                                    text: 'Actions',
                                                                    formatter: (cellContent, row) => {
                                                                        return (
                                                                            <div>
                                                                                <div className="d-block w-100 text-center">
                                                                                    <UncontrolledButtonDropdown>
                                                                                        <DropdownToggle caret className="btn-icon btn-icon-only btn btn-link" color="link">
                                                                                            <i className="lnr-menu-circle btn-icon-wrapper" />
                                                                                        </DropdownToggle>
                                                                                        <DropdownMenu right className="rm-pointers dropdown-menu-hover-link">
                                                                                            <DropdownItem header>Header</DropdownItem>
                                                                                            <DropdownItem>
                                                                                                <i className="dropdown-icon lnr-inbox"> </i>
                                                                                                <span>Menus</span>
                                                                                            </DropdownItem>
                                                                                            <DropdownItem>
                                                                                                <i className="dropdown-icon lnr-file-empty"> </i>
                                                                                                <span>Settings</span>
                                                                                            </DropdownItem>
                                                                                            <DropdownItem>
                                                                                                <i className="dropdown-icon lnr-book"> </i>
                                                                                                <span>Actions</span>
                                                                                            </DropdownItem>
                                                                                            <DropdownItem divider />
                                                                                            <DropdownItem>
                                                                                                <i className="dropdown-icon lnr-picture"> </i>
                                                                                                <span>Dividers</span>
                                                                                            </DropdownItem>
                                                                                        </DropdownMenu>
                                                                                    </UncontrolledButtonDropdown>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    }
                                                                },
                                                            ]}
                                                            data={desig}    
                                                            search
                                                            >
                                                            {
                                                                toolkitprops => (
                                                                    <div>
                                                                        <ToggleList {...toolkitprops.columnToggleProps} />
                                                                        <hr />
                                                                        <SearchBar {...toolkitprops.searchProps} />
                                                                        <hr />
                                                                        <BootstrapTable
                                                                            striped
                                                                            selectRow={{ mode: 'checkbox' , clickToSelect: true }}
                                                                            expandRow={expandRow}
                                                                            hover
                                                                            {...toolkitprops.baseProps}
                                                                            filter={filterFactory()}
                                                                            defaultSorted={defaultSorted}
                                                                            {...paginationTableProps}
                                                                        />
                                                                    </div>
                                                                )
                                                            }
                                                        </ToolkitProvider>
                                                        <PaginationListStandalone {...paginationProps} />
                                                    </div>
                                                )
                                        }
                                    </PaginationProvider>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <div style={{ paddingBottom: '10px' }}>
                                        <Button className="btn-dashed" color="primary">
                                            Tambah Data
                                            </Button>
                                    </div>
                                    <ReactTable
                                        data={desig}

                                        columns={[
                                            {
                                                Header: "Name",
                                                columns: [
                                                    {
                                                        Header: "Check",
                                                        filterable: false,
                                                        width: 100,
                                                        Cell: row => {
                                                            return (
                                                                <div className="d-block w-100 text-center">
                                                                    <CustomInput type="checkbox" id={row.original.id_t} />
                                                                </div>
                                                            );
                                                        }
                                                    },
                                                    {
                                                        Header: "First Name",
                                                        accessor: 'name',
                                                        Cell: this.renderEditable

                                                    },
                                                    {
                                                        Header: "Last Name",
                                                        accessor: 'jumlah'

                                                    }
                                                ]
                                            },
                                            {
                                                Header: "Info",
                                                columns: [{
                                                    Header: "Age",
                                                    filterable: false,
                                                    accessor: 'jumlah',
                                                    Cell: row => {
                                                        if (row.original.jumlah >= 50) {
                                                            return (
                                                                <div className="d-block w-100 text-center">
                                                                    <span className="btn btn-success">Completed</span>
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div className="d-block w-100 text-center">
                                                                    <span onClick={() => this.oke(row.original.id)} className="btn btn-danger">Uncompleted</span>
                                                                </div>
                                                            );
                                                        }
                                                    }
                                                }]
                                            }
                                        ]}
                                        filterable
                                        pageSize={5}
                                        showPageSizeOptions={false}
                                        showPageJump={false}
                                        showPaginationBottom={false}
                                    />
                                    <div style={{ paddingTop: '10px' }}>
                                        <ButtonGroup size="lg" className="mb-2">
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(1, 'dandi')}
                                                active={this.state.rSelected === 1}>First</Button>
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(2, 'deni')}
                                                active={this.state.rSelected === 2}>Next</Button>
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(3, 'oke')}
                                                active={this.state.rSelected === 3}>Previous</Button>
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(4, 'mantap')}
                                                active={this.state.rSelected === 4}>last</Button>
                                        </ButtonGroup>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}