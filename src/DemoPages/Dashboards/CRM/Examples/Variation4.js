import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col,
    Button,
    TabContent,
    TabPane,
    Card,
    CardBody, Input, CardFooter,
    FormGroup, Label, CustomInput, CardHeader, Form,
    InputGroup, InputGroupAddon,
    ListGroupItem,
    ButtonGroup

} from 'reactstrap';
import {
    ResponsiveContainer,
} from 'recharts';
import PerfectScrollbar from 'react-perfect-scrollbar';


const Designation = [
    { name: 'CEO', id: 7, isChecked: false },
    { name: 'Teknikal Lead', id: 8, isChecked: false },
    { name: 'Scrum Master', id: 9, isChecked: false },
    { name: 'FronEnd Lead Programmer', id: 10, isChecked: false },
    { name: 'BackEnd Programer', id: 2, isChecked: false },
    { name: 'Intership', id: 1, isChecked: false },
    { name: 'Android Programer', id: 3, isChecked: false },
    { name: 'Technical Writter', id: 4, isChecked: false},
]


const relasi = [
    { name: 'Android', id: [7],id_t:'20' },
    { name: 'WEB', id: [7,8] , id_t:'21' },
    { name: 'Facebook', id: [8,2] ,id_t: '22' },
    { name: 'Visual Designer', id: [7,9], id_t: '23'},
    { name: 'WhatApp', id: [1] , id_t:'24'},
    { name: 'Komputer', id: [2], id_t: '25'},
    { name: 'Mouse', id: [3], id_t: '26'},
    { name: 'Keyboard', id: [4] , id_t:'27'},
]



class MinimalDashboard4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '2',
            design: Designation,
            data: relasi,
            d: '',
            b: '',
            checked: false,
            fil: [],
            filtered:[]   
        }  
    }

    handle = (e,value) => {
        let design = this.state.design;
        let allChecked = this.state.checked;
        if (e.target.value === "check") {
           
            design.forEach(item => {
                item.isChecked = e.target.checked;
                allChecked = e.target.checked;
            
               if (item.isChecked === true) {

                    this.setState({
                    fil: this.state.fil.concat(...new Set(this.state.design.map(el => (el.id)))),
                    filtered:this.state.data
                       })
               }else{
                   this.setState({
                       fil: this.state.fil.splice(),
                       filtered: this.state.data
                   })
               }
            });
            
        }else{
            design.find(item => item.name === e.target.name).isChecked = e.target.checked;
            if (design.find(item => item.name === e.target.name).isChecked === true) {
                this.setState({
                    fil: this.state.fil.concat(value), 
                    filtered:[]         
                })
            }else{
                this.setState({
                    fil: this.state.fil.filter(item => item !== value),
                    filtered:[]
                })
            }
        }
        this.setState({ design: design, checked: allChecked });
    }


    render() {
        const select = "exampleCustomCheckbox";
        const { d, b , design , fil , data } = this.state;
        const filterData = design ? design.filter(
            e => e.name.toLowerCase().indexOf(d.toLowerCase()) > -1
        ) : design; 
        console.log()
        let test = []
        fil.map(el => (
            test = [...test, data.filter(e => {
                return fil.every(evt => e.id.includes(evt))
            })]
        ))
            test.map(lul => (
                 this.state.filtered = [...new Set(this.state.filtered.concat(lul))]
             ))
        const filterDesign = this.state.filtered ? this.state.filtered.filter(
            e => e.name.toLowerCase().indexOf(b.toLowerCase()) > -1) : this.state.filtered;
        
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <CardHeader className="card-header-tab">
                        <div>Add New Claim Policy</div>
                    </CardHeader>
                    <Card tabs="true" className="mb-3">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="2">
                                <CardBody>
                                    <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <Form>
                                                <FormGroup row>
                                                    <Label for="Name" sm={12} size="lg">1 <font style={{ paddingLeft: '20px' }}> Claim Name</font></Label>
                                                    <Col sm={6} style={{ paddingLeft: '52px' }}>
                                                        <Input type="text" name="FulName" />
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup row>
                                                    <Label for="leave" sm={12} size="lg">2 <font style={{ paddingLeft: '20px' }}>Part of Leave</font></Label>
                                                    <Col sm={3} style={{ paddingLeft: '52px' }}>
                                                        <CustomInput type="select"
                                                            name="leave" placeholder="Select Province">
                                                            <option value="" selected disabled hidden>Select Claim</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                    
                                                    <Col sm={3} className="new-claim">
                                                        <CustomInput type="checkbox" id="exampleCustomCheckbox12"
                                                            label="New Claim" />
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup row>
                                                    <Label for="balance" sm={12} size="lg">3 <font style={{ paddingLeft: '20px' }}>Claim Balance</font></Label>
                                                    <Col sm={3} style={{ paddingLeft: '52px' }}>
                                                        <CustomInput type="select"
                                                            name="balance" placeholder="Select Period">
                                                            <option value="" selected disabled hidden>Select Period</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                    <Label for="balance" sm={12} size="lg" style={{ paddingTop: '20px' }}><font style={{ paddingLeft: '38px' }}>Balance Total</font></Label>
                                                    <Col sm={3} style={{ paddingLeft: '52px' }}>
                                                        <InputGroup >
                                                            <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                                                            <Input type="number" min="0" placeholder="0" style={{ textAlign: 'right' }} />
                                                        </InputGroup>
                                                    </Col>
                                                    <Col sm={3} className="balance-total">
                                                        <CustomInput type="checkbox" id="exampleCustomCheckbox13"
                                                            label="Must Provide Proof" />
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup row>
                                                    <Label for="aproval" sm={12} size="lg">4 <font style={{ paddingLeft: '20px' }}>Claim Approval From</font></Label>
                                                    <Col sm={4} style={{ paddingLeft: '52px' }}>
                                                        <CustomInput type="select"
                                                            name="balance" placeholder="Select Approver">
                                                            <option value="" selected disabled hidden>Select Approver</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                    <Col sm={12} style={{ paddingLeft: '60px', paddingTop: '16px' }}>
                                                        <CustomInput type="checkbox" id="exampleCustomCheckbox14"
                                                            label="Second Approval" />
                                                    </Col>
                                                    <Label for="aprovals" sm={12} size="lg" style={{ paddingTop: '20px' }}> <font style={{ paddingLeft: '38px' }}>Second Approval From</font></Label>
                                                    <Col sm={3} style={{ paddingLeft: '52px' }}>
                                                        <CustomInput type="select"
                                                            name="balance" placeholder="Select Approver">
                                                            <option value="" selected disabled hidden>Select Approver</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>


                                                <FormGroup row>
                                                    <Label for="Applied" sm={12} size="lg">5 <font style={{ paddingLeft: '20px' }}>Applied to</font></Label>
                                                   
                                                        
                                                <div className='flex'>
                                                    <div className='flex1'>
                                                    <Col>
                                                        <Card >
                                                            <ListGroupItem>
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <CustomInput onClick={this.handle} type="checkbox" id="exampleCustomCheckbox15"
                                                                                label="Designation" value='check' checked={this.state.isChecked }   />
                                                                        </div>
                                                                        <div className="widget-content-right">
                                                                            <ButtonGroup size="sm">
                                                                                        <Button style={{ backgroundColor: '#003D51' }} className="btn-wide fsize-1" size="lg">
                                                                                    Apply
                                                                                </Button>
                                                                            </ButtonGroup>
                                                                        </div> 
                                                                    </div>
                                                                </div>
                                                            </ListGroupItem>
                                                            <ListGroupItem>
                                                                <Input type="text" name="FulName" value={d} onChange={(e) => { this.setState({ d: e.target.value }) }} placeholder="Search..." />
                                                            </ListGroupItem>
                                                            <div className="scroll-area-sm" style={{ maxHeight:'100%', overflow:'auto'}}>
                                                                <PerfectScrollbar>
                                                                    {filterData.map(el => (
                                                                        <ListGroupItem>
                                                                            <div>
                                                                                <CustomInput key={el.id} onChange={(e)=> this.handle(e,el.id)} checked={el.isChecked} name={el.name} type="checkbox" id={select,el.id} label={el.name}  />
                                                                            </div>
                                                                        </ListGroupItem>
                                                                    ))}
                                                                </PerfectScrollbar>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    </div>

                                                    <div className='flex2'>
                                                    <Col>
                                                        <Card >
                                                            <ListGroupItem>
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <CustomInput type="checkbox" id="exampleCustomCheckbox16"
                                                                                label="Designation For" />
                                                                        </div>

                                                                        <div className="widget-content-right">
                                                                            <ButtonGroup size="sm">
                                                                                        <Button style={{ backgroundColor: '#EF4D5E' }} className="btn-wide fsize-1" size="lg">
                                                                                    Remove
                                                                                </Button>
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </ListGroupItem>
                                                            <ListGroupItem>

                                                                        <Input type="text" name="FulName" value={b} onChange={(e) => { this.setState({ b: e.target.value }) }} placeholder="Search..." />

                                                            </ListGroupItem>

                                                            <div className="scroll-area-sm" style={{ maxHeight:'100%',overflow:'auto' }}>
                                                                <PerfectScrollbar>
                                                                    
                                                                    {filterDesign.map(el => (
                                                                        <ListGroupItem>
                                                                            <div>
                                                                                <CustomInput type="checkbox" id={select,el.id_t} label={el.name}  />
                                                                            </div>
                                                                        </ListGroupItem>
                                                                    ))}
                                                                </PerfectScrollbar>
                                                            </div>
                                                        </Card>
                                                    </Col>    
                                                        </div>
                                                    </div>
                                                </FormGroup>
                                            </Form>
                                        </ResponsiveContainer>
                                    </div>
                                </CardBody>
                                    <CardFooter className="d-block p-4 text-right">
                                        <Button style={{ right: '10px', backgroundColor: "#da222200", color: "black", borderColor: "#ff000000" }} className="fsize-1" size="lg">
                                            Cancel
                                    </Button>
                                    <Button style={{ backgroundColor: '#003D51' }} className="btn-wide fsize-1" size="lg">
                                            Save
                                    </Button>
                                    </CardFooter>
                            </TabPane>

                        </TabContent>
                    </Card>

                </ReactCSSTransitionGroup>
            </Fragment>
                )
            }
        }
        
        
        
export default MinimalDashboard4;