import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { getData } from '../../../../action/index';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Col,
    Button,
    TabContent,
    TabPane,
    Card,
    CardBody, Input, CardFooter,
    FormGroup, Label, CustomInput

} from 'reactstrap';

import {
    ResponsiveContainer,

} from 'recharts';

import img from './LTE.jpg';

import './app.css';

import { bindActionCreators } from 'redux'


const masDat = [
    { name: 'Habib Akbar'},
    { name: 'Aulia Muslim Hidayatullah'},
    { name: 'Habib Akbar Aziz'},
    { name: 'Page D'},
    { name: 'Page E'},
    { name: 'Page F'},
    { name: 'Page G'},
    { name: 'Page C'},
    { name: 'Page D'},
    { name: 'Page E'},
    { name: 'Page F'},
    { name: 'Page G'},
]




class MinimalDashboard3 extends Component {

    constructor(props) {
        super(props);
      
        this.toggle = this.toggle.bind(this);
        this.togglePop1 = this.togglePop1.bind(this);
        this.state = {
            popoverOpen1: false,
            activeTab: '2',
            modal: false,
            startDate: new Date(),
            open: false,
            d: '',
            data:'',
            in:'',
            id:null
        }
        this.handleChange = this.handleChange.bind(this);
       
        this.open = this.open.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    togglePop1() {
        this.setState({
            popoverOpen1: !this.state.popoverOpen1
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    open(){
        this.setState({
             open:!this.state.open
        })
    }

    cek(value){
        this.setState({
            open: !this.state.open,
            d:'',
           data : value
        })
    }

    render() {
        const { data , d } = this.state;
        const filterData = this.props.articles ? this.props.articles.filter(
            e => e.name.toLowerCase().indexOf(d.toLowerCase()) > -1
        ) : this.props.articles;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Card tabs="true" className="mb-3">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="2">
                                <CardBody>
                                    <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <Col sm="12" md="12" xl="12" style={{paddingBottom:'50%'}}>
                                                <FormGroup row>
                                                    <Label for="Access" sm={12} size="lg">1. <font style={{ paddingLeft:'20px' }}>New Account Owner</font></Label>
                                                    <Col sm={4} style={{ paddingLeft: '56px' , zIndex:'2' }}>

                                                        <CustomInput type="select"
                                                            name="Access" onClick={this.open}>
                                                            <option value={data} selected disabled hidden>{data ? data : "Select Employee"}</option>
                                                                </CustomInput>

                                                        <div style={{  visibility: this.state.open ? '' : 'hidden', paddingTop:'10px' }}>
                                                            <div className="form">
                                                                    <Col sm="12" md="12" xl="12" className="col-input">
                                                                        <Input type="text" name="text" placeholder="search" className="form-input" value={d}  onChange={(e) => {this.setState({d: e.target.value}) }} />   
                                                                    </Col>
                                                            </div>
                                                            <div className="deni">
                                                                    <Col sm="12" md="12" xl="12" style={{ paddingLeft:'22px', overflow:'auto' }}>
                                                                        {filterData.map(el => (
                                                                            <div className="list">
                                                                             <div>
                                                                                <img src={img} height="60px" onClick={()=>this.cek(el.name)} style={{ boxShadow:'2px 2px 8px black' }} />
                                                                            </div>
                                                                                <div style={{ display: 'flex', flexDirection: 'row'  }}>
                                                                                    <div style = {{ flexDirection: 'column', marginLeft:'10px' }}>
                                                                                        <b><p style={{ marginTop: '10px' }} onClick={()=>this.cek(el.name)}>{el.name}</p></b>
                                                                                        <p style={{ marginTop: '-20px' }} onClick={() => this.cek(el.name)}>{el.address.street}</p>
                                                                           
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        ))}
                                                                    </Col>
                                                            </div>
                                                        </div>

                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row style={{ marginTop:"-311px"}}>
                                                    <Label for="Access" sm={12} size="lg">2. <font style={{ paddingLeft: '20px' }}>Masih pertanyaan</font></Label>
                                                    <Col sm={4} style={{ paddingLeft: '56px' }}>
                                                        <CustomInput type="select"
                                                            name="Access" />
                                                            
                                                            
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </ResponsiveContainer>
                                    </div>

                                </CardBody>
                                <CardFooter className="d-block p-4 text-right">
                                    <Button style={{ right: '10px', backgroundColor: "#da222200", color: "black", borderColor: "#ff000000" }} className="fsize-1" size="lg">
                                        Cancel
                                    </Button>
                                    <Button style={{ backgroundColor: '#295950' }} className="btn-wide fsize-1"  size="lg">
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


const mapDispatchToProps = dispatch => (
    bindActionCreators({ getData: getData }, dispatch)
)

function mapStateToProps(state) {
    return {
        articles: state.red.articles.slice(0,5)
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(MinimalDashboard3)