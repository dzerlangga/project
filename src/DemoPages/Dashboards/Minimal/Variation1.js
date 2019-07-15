import React, { Component, Fragment } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitleAlt3 from '../../../Layout/AppMain/PageTitleAlt3';

import {
    faCalendarAlt,faAngleLeft,

} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';

import {
    InputGroup, InputGroupAddon,
    Col, 
    Button,
    CardHeader,
   
    TabContent,
    TabPane,
    Card,
    CardBody, Input, CardFooter,
    Form, FormGroup, Label, CustomInput,

} from 'reactstrap';

import {
    ResponsiveContainer,

} from 'recharts';

export default class MinimalDashboard2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()

        };

        this.state = {
            popoverOpen1: false,
            activeTab: '2',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }


    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <PageTitleAlt3
                        heading="FORM"
                        subheading="This is an example dashboard created using build-in elements and components."
                        icon="lnr-apartment icon-gradient bg-mean-fruit"
                    />
                    

                    <Card tabs="true" className="mb-3">
                        <CardHeader className="card-header-tab">
                            <div>
                                <FontAwesomeIcon icon={faAngleLeft}/> FORM
                            </div>

                        </CardHeader>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="2">
                                <Form>
                                <CardBody>
                                    <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                        <ResponsiveContainer width="100%" height="100%">
                                            
                                                <p style={{ color:'#295950' }} ><h5><b>Personal Information</b></h5></p>
                                                <FormGroup row>
                                                    <Label for="Name" sm={12} size="lg">1 Full Name*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <Input type="text" name="FulName" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Gender" sm={12} size="lg">2 Gender*</Label>
                                                        <Col sm={1} style={{ paddingLeft: '3%' }}>
                                                            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Male" />
                                                        </Col>
                                                        <Col sm={4}>
                                                            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Female" />
                                                        </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="email" sm={12} size="lg">3 Email*</Label>`
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <Input type="email" name="email" />
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup row>
                                                    <Label for="Phone" sm={12} size="lg">4 Phone Number*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <Input type="text" name="phone" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="religion" sm={12} size="lg">5 Religion*</Label>
                                                    <Col sm={4} style={{ paddingLeft: '3%' }}>
                                                        <CustomInput type="select"
                                                            name="religion" placeholder="Select Province">
                                                            <option value="" selected disabled hidden>Select Religion</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="address" sm={12} size="lg">6 Address*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <Input type="textarea" name="address" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="city" sm={12} size="lg">7 City/District*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <CustomInput type="select"
                                                            name="city" required >
                                                            <option value="" selected disabled hidden>Select City/District</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Province" sm={12} size="lg">8 Province*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <CustomInput type="select"
                                                            name="province">
                                                            <option value="" selected disabled hidden>Select Province</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Postal" sm={12} size="lg">9  Postal Code*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '3%' }}>
                                                        <Input type="text" name="postal" />
                                                    </Col>
                                                </FormGroup>
                                                <div className="divider" />
                                                <p style={{ color: '#295950' }}><h5><b>Security</b></h5></p>

                                                <FormGroup row>
                                                    <Label for="Password" sm={12} size="lg">10 Password*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '4%' }}>
                                                        <Input type="password" name="password" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Password2" sm={12} size="lg">11 Confirm Password*</Label>
                                                    <Col sm={6} style={{ paddingLeft: '4%' }}>
                                                        <Input type="password" name="password" />
                                                    </Col>
                                                </FormGroup>
                                                <div className="divider" />
                                                <p style={{ color: '#295950' }}><h5><b>Work Data Information</b></h5></p>
                                                <FormGroup row>
                                                    <Label for="Id" sm={12} size="lg">12 Id number</Label>
                                                    <Col sm={6} style={{ paddingLeft: '4%' }}>
                                                        <Input type="text" name="Id" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Attendance" sm={12} size="lg">13 Attendance number</Label>
                                                    <Col sm={6} style={{ paddingLeft: '4%' }}>
                                                        <Input type="text" name="attendance" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Date" sm={12} size="lg">14 Join Date</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <InputGroup>
                                                            <DatePicker className="form-control"
                                                                selected={this.state.startDate}
                                                                onChange={this.handleChange}
                                                                placeholderText="Select Date"
                                                            />
                                                            <InputGroupAddon addonType="prepend">
                                                                <div className="input-group-text">
                                                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                                                </div>
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Organization" sm={12} size="lg">15 Organization*</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="organization">
                                                            <option value="" selected disabled hidden>Select Organization</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Designation" sm={12} size="lg">16 Designation</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="designation" >
                                                            <option value="" selected disabled hidden>Select Designation</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Level" sm={12} size="lg">17 Level</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="level" >
                                                            <option value="" selected disabled hidden>Select Level</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Type" sm={12} size="lg">18 Employee Type</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="type" >
                                                            <option value="" selected disabled  hidden>Select Type</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Location" sm={12} size="lg">19 Office Location</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="location" >
                                                            <option value="" selected disabled hidden >Select Office</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Supervisior" sm={12} size="lg">20 Direct Supervisior</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="Supervisior" >
                                                            <option value="" selected disabled hidden>Select designation</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="Access" sm={12} size="lg">21 Access Rights</Label>
                                                    <Col sm={4} style={{ paddingLeft: '4%' }}>
                                                        <CustomInput type="select"
                                                            name="Access" >
                                                            <option value="" selected disabled hidden>Select Access Rights</option>
                                                            <option>Value 1</option>
                                                            <option>Value 2</option>
                                                            <option>Value 3</option>
                                                            <option>Value 4</option>
                                                            <option>Value 5</option>
                                                        </CustomInput>
                                                    </Col>
                                                </FormGroup>
                                           
                                        </ResponsiveContainer>
                                    </div>
                                </CardBody>
                                <CardFooter className="d-block p-4 text-right">
                                    <Button style={{ right: '10px', backgroundColor: "#da222200", color: "black", borderColor: "#ff000000" }}  onClick={this.cek} className="fsize-1" size="lg">
                                        Cancel
                                    </Button>
                                    <Button style={{ backgroundColor: '#295950' }} className="btn btn-primary btn-wide fsize-1" size="lg">
                                        Save
                                    </Button>
                                </CardFooter>
                                 </Form>
                            </TabPane>
                        </TabContent>
                    </Card>

                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}