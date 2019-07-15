import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitleAlt2 from '../../../Layout/AppMain/PageTitleAlt2';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import CRMDashboard1 from './Examples/Variation1';
import CRMDashboard2 from './Examples/Variation2';
import CRMDashboard3 from './Examples/Variation3';
import CRMDashboard4 from './Examples/Variation4';


export default class CRMDashboard extends Component {

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
                    <PageTitleAlt2
                        heading="TRAINING"
                        subheading="DATA / FORM"
                        icon="lnr-apartment icon-gradient bg-mean-fruit"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Data Sekolah' key="1"><CRMDashboard2/></TabPane>
                        <TabPane tab='Add Employee' key="2"><CRMDashboard1 /></TabPane>
                        <TabPane tab='Account Transfer' key="3"><CRMDashboard3 /></TabPane>
                        <TabPane tab='Claim' key="4"><CRMDashboard4/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
