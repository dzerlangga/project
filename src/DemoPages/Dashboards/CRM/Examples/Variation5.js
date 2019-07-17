import React, { Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody, Button, ButtonGroup,
    CustomInput
} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ReactTable from "react-table";

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

    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
    }

    cek(value) {
        this.setState({
            checkbox: this.state.checkbox.concat(value)
        })
        console.log(this.state.checkbox)
    }

    oke(value){
        console.log(value)
    }



    render() {
        const { desig } = this.state;

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
                                    <ReactTable
                                        data={desig}
                                        
                                        columns={[
                                            {
                                                Header: "Name",
                                                columns: [
                                                    {
                                                        Header: "Check",
                                                        filterable:false,
                                                        width:100,
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
                                                                    <span onClick={()=> this.oke(row.original.id)} className="btn btn-danger">Uncompleted</span>
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
                                                onClick={() => this.onRadioBtnClick(1)}
                                                active={this.state.rSelected === 1}>First</Button>
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(2)}
                                                active={this.state.rSelected === 2}>Next</Button>
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(3)}
                                                active={this.state.rSelected === 3}>Previous</Button>
                                            <Button className="btn-dashed" color="primary"
                                                onClick={() => this.onRadioBtnClick(4)}
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