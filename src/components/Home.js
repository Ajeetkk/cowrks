import React, { Component } from 'react';
import { Container, Row, Col} from 'react-grid-system';
import {ButtonGroup, Button, InputGroup, Badge, Collapse, NavDropdown, ButtonToolbar, MenuItem, DropdownButton, Tab, Nav, Navbar, NavItem, FormControl, FormGroup, Glyphicon} from 'react-bootstrap'
import './css/TabRightCss.css';
import classnames from 'classnames';
import { Label } from 'semantic-ui-react';

class Home extends Component {

  constructor(props) {
		super(props);
    this.state = {
      active: true, 
      showText: false
    };
    
	}
  

  render() {
    let classes = classnames('specialbutton', {active: this.state.active});
    var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
    }
       
    
    return (
      <div>
<Container fluid>
<Row>
    <Col sm={12} style={{ paddingLeft:'0px', paddingRight:'0px'}}>
    <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand" style={{ background: '#4030f2', color: 'white', marginLeft: '-104px', paddingTop: '22px', paddingBottom: '47px', width: '111px', textAlign: 'center'}}>t<span style={{background:'white', color:'black', fontSize:'20px'}}><b>EG</b></span></a> 
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    <NavItem eventKey={1} href="#">
      
    </NavItem>
      <NavDropdown eventKey={3} title="Tracking" id="basic-nav-dropdown" style={{fontSize:'20px', height: '64px', borderRight:'2px solid #f2f2f2'}}>
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
      <NavItem eventKey={2} href="#">
     <form>
      <InputGroup>
        <InputGroup.Button>
          <Button style={{background: '#fcfcfc', color:'blue', border:'0px', fontSize:'20px'}}> <Glyphicon glyph="search" /></Button>
        </InputGroup.Button>
        
            <FormControl type="text" placeholder="Search By doc Type" style={{border:'0px', padding:'20px', background: '#fcfcfc', width:'500px'}}/>
   
             </InputGroup>
             </form>  
      
      </NavItem>
    </Nav>
    <Nav pullRight>
      {/* <NavItem eventKey={1} href="#">
        Link Right
      </NavItem> */}
      <NavItem eventKey={2} href="#" className="bell">
      
            <span class="cui-bell" aria-hidden="true" style={{color:'blue'}}><Badge style={{background:'red', color:'red', marginTop: '-9px', position: 'absolute', marginLeft: '-11px', fontSize: '8px'}}>.</Badge></span>
            
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </Col>
</Row>
<Tab.Container fluid id="left-tabs-example" defaultActiveKey="Dashboard">
  <Row className="">
    <Col sm={1} style={{ background: '#4d4dff', paddingLeft:'0px', paddingRight:'0px'}}>
      <div className="pillssidebar"><Nav bsStyle="pills" stacked>
        <NavItem eventKey=""></NavItem>
        <NavItem eventKey="Dashboard"><i class="fa fa-dashboard" style={{fontSize:'30px'}}></i>Dashboard</NavItem>
        <NavItem eventKey="Trips"><i class="fa fa-truck" style={{fontSize:'30px'}}></i><br />Trips</NavItem>
        <NavItem eventKey="Tracking"><i class="fa fa-map-marker" style={{fontSize:'30px'}}></i><br />Tracking</NavItem>
        <NavItem eventKey="Transport"> <i class="fa fa-group" style={{fontSize:'30px'}}></i><br />Transport</NavItem>
        <NavItem eventKey="Analytics"><i class="fa fa-bar-chart" style={{fontSize:'30px'}}></i>Analytics</NavItem>
      </Nav>
      </div>
    </Col>
    <Col sm={11} style={{background:'#f2f2f2'}}>
      <Tab.Content animation>
        <Tab.Pane eventKey=""></Tab.Pane>
        <Tab.Pane eventKey="Dashboard">
               <br></br>
               <br />
                <Row>
                    <Col sm={8}>
                    <ButtonGroup justified>
                      <Button href="#" className={classes} bsStyle="default" style={{background:'#0000b3', color:'white'}}><span style={{fontSize:'17px'}}>All</span><span>(54)</span></Button>
                      <Button href="#" style={{background:'white'}}><span style={{fontSize:'17px', color:'#0000b3'}}>Ftl</span><span>(26)</span></Button>
                      <Button href="#" style={{background:'white'}}><span style={{fontSize:'17px', color:'#0000b3'}}>Lcl</span><span>(16)</span></Button>
                      <Button href="#" style={{background:'white'}}><span style={{fontSize:'17px', color:'#0000b3'}}>Courier</span><span>(10)</span></Button>
                      <Button href="#" style={{background:'white'}}><span style={{fontSize:'17px', color:'#0000b3'}}>Container</span><span>(03)</span></Button>
                      
                    </ButtonGroup>
                    </Col>
                    <Col sm={4}>
                    <ButtonGroup justified activeKey={1}>
                      <Button href="#"className={classes} bsStyle="default" style={{background:'#0000b3', color:'white'}}><span style={{fontSize:'17px'}}>Inbount</span><span>(30)</span></Button>
                      <Button href="#" style={{background:'white'}}><span style={{fontSize:'17px', color:'#0000b3'}}>Outbound</span><span>(26)</span></Button>
                    
                      
                    </ButtonGroup>
                    </Col>
                </Row>
                <br />
                <form>
                <Row>
                  <Col sm={4}>
                  <FormGroup>
                  <InputGroup>
                    <InputGroup.Button>
                      <Button style={{background: 'white', color:'#cec5c5', borderRight:'0px'}}> <Glyphicon glyph="search" /></Button>
                    </InputGroup.Button>
                    <FormControl type="text" placeholder="Select Transporter" style={{borderLeft:'0px'}}/>
                  </InputGroup>
                  
                  </FormGroup>
                  
                  </Col>
                  <Col sm={4}>
                  <FormGroup>
                  <InputGroup>
                    <InputGroup.Button>
                      <Button style={{background: 'white', color:'#cec5c5', borderRight:'0px'}}> <Glyphicon glyph="search" /></Button>
                    </InputGroup.Button>
                    <FormControl type="text" placeholder="Select Plant/Depot" style={{borderLeft:'0px'}}/>
                  </InputGroup>
                  
                  </FormGroup>
                  </Col>
                  <Col sm={4}>
                  <FormGroup>
                  <InputGroup>
                    <InputGroup.Button>
                      <Button style={{background: 'white', color:'#cec5c5', borderRight:'0px'}}> <Glyphicon glyph="search" /></Button>
                    </InputGroup.Button>
                    <FormControl type="text" placeholder="Select Item" style={{borderLeft:'0px'}}/>
                  </InputGroup>
                  
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={2}>
                  <div style={{background: 'rgb(77, 77, 255)', height: '46px', borderTopRightRadius:'5px', borderTopLeftRadius:'5px'}}></div>
                  </Col>
                  <Col sm={1}>
                  <h5>TRACKED</h5>
                  </Col>
                  <Col sm={7}>
                  <hr style={{background:'#e8e8ed', height:'5px'}}></hr>
                  </Col>
                  <Col sm={2}>
                  <h5>UN-TRACKED</h5>
                  </Col>
                </Row>
                <Row>
                  <Col sm={2}> 
                    <div style={{background:'rgb(77, 77, 255)', color:'white', padding:'15px', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}>
                       <label><h6>TOTAL TRIPS</h6></label>
                       <br />
                       <Row>
                         <Col xs={6} sm={6}>
                         <span style={{fontSize:'25px'}}>54</span>
                         </Col>
                         <Col xs={6} sm={6}>
                         <h6>100 cr</h6>
                         </Col>                       
                        
                       </Row>
                       <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                       <Row>
                         <Col xs={6} sm={6}>
                          +8%
                         </Col>
                         <Col xs={6} sm={6}>
                         -9.9%
                         </Col>
                       </Row>
                       
                    </div>
                  </Col>
                  <Col sm={2}>
                  <div style={{background:'#33cc33', color:'white', padding:'15px', borderRadius:'10px'}}>
                       <label><h6>ONE-TIME</h6></label>
                       <br />
                       <Row>
                         <Col xs={6} sm={6}>
                         <span style={{fontSize:'25px'}}>26</span>
                         </Col>
                         <Col xs={6} sm={6}>
                         <h6>47 cr</h6>
                         </Col>                       
                        
                       </Row>
                       <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                       <Row>
                         <Col xs={6} sm={6}>
                          +8%
                         </Col>
                         <Col xs={6} sm={6}>
                         -9.9%
                         </Col>
                       </Row>
                       
                    </div>
                  </Col>
                  <Col sm={2}>
                  <div style={{background:'#bfbfbf', color:'white', padding:'15px', borderRadius:'10px'}}>
                       <label><h6>DELAYED</h6></label>
                       <br />
                       <Row>
                         <Col xs={6} sm={6}>
                         <span style={{fontSize:'25px'}}>12</span>
                         </Col>
                         <Col xs={6} sm={6}>
                         <h6>27.2 cr</h6>
                         </Col>                       
                        
                       </Row>
                       <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                       <Row>
                         <Col xs={6} sm={6}>
                          +8%
                         </Col>
                         <Col xs={6} sm={6}>
                         -9.9%
                         </Col>
                       </Row>
                       
                    </div>
                  </Col>
                  <Col sm={2}>
                  <div style={{background:'black', color:'white', padding:'15px', borderRadius:'10px'}}>
                       <label><h6>DEVITED</h6></label>
                       <br />
                       <Row>
                         <Col xs={6} sm={6}>
                         <span style={{fontSize:'25px'}}>03</span>
                         </Col>
                         <Col xs={6} sm={6}>
                         <h6>9.3 cr</h6>
                         </Col>                       
                        
                       </Row>
                       <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                       <Row>
                         <Col xs={6} sm={6}>
                          +8%
                         </Col>
                         <Col xs={6} sm={6}>
                         -9.9%
                         </Col>
                       </Row>
                       
                    </div>
                  </Col>
                  <Col sm={2}>
                  <div style={{background:'#ff5c33', color:'white', padding:'15px', borderRadius:'10px'}}>
                       <label><h6>MISSING</h6></label>
                       <br />
                       <Row>
                         <Col xs={6} sm={6}>
                         <span style={{fontSize:'25px'}}>07</span>
                         </Col>
                         <Col xs={6} sm={6}>
                         <h6>9.3 cr</h6>
                         </Col>                       
                        
                       </Row>
                       <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                       <Row>
                         <Col xs={6} sm={6}>
                          +8%
                         </Col>
                         <Col xs={6} sm={6}>
                         -9.9%
                         </Col>
                       </Row>
                       
                    </div>
                  </Col>
                  <Col sm={2}>
                  <div style={{background:'#80aaff', color:'white', padding:'15px', borderRadius:'10px'}}>
                       <label><h6>UN-TRACKED</h6></label>
                       <br />
                       <Row>
                         <Col xs={6} sm={6}>
                         <span style={{fontSize:'25px'}}>03</span>
                         </Col>
                         <Col xs={6} sm={6}>
                         <h6>3.2 cr</h6>
                         </Col>                       
                        
                       </Row>
                       <hr style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                       <Row>
                         <Col xs={6} sm={6}>
                          +8%
                         </Col>
                         <Col xs={6} sm={6}>
                         -9.9%
                         </Col>
                       </Row>
                       
                    </div>
                  </Col>
              </Row>
                <br />
                <Row>
                  <Col sm={6}>
                    <div style={{background:'white', paddingBottom:'10px'}}> 
                    <br />
                     <ul style={{padding:'15px', borderLeft:'5px solid #ff4d4d'}}>
                       <li style={{display: 'block', float:'left', color:'#ff4d4d', fontSize:'16px'}}><b> <i class="fa fa-exclamation-circle" style={{fontSize:'24px'}}></i>Missing Truck</b></li>
                       <li style={{display: 'block', textAlign:'right'}} pullLeft>Value: <Badge style={{color:'#ff4d4d', background:'#ffe6e6'}}>5 cr</Badge></li>
                     </ul>
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Trip id</b>: <span>123456</span><br />
                            <b>Transporter</b>: <span>VRL Logistic</span>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>From</b>: <span>Mumbai</span><br />
                            <b>To</b>: <span>Bangalore</span>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>
                      
                      <br />
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Driver Details</b>
                            <h5>Rahul(+91-9876543210)</h5>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>Last Known Details</b>
                            <h5>Kolhapur(26-oct-2017, 11:12 PM)</h5>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>
                    </div>
                    
                  </Col>
                  <Col sm={6}>
                  <div style={{background:'white', paddingBottom:'10px'}}> 
                    <br />
                     <ul style={{padding:'15px', borderLeft:'5px solid #ff4d4d'}}>
                       <li style={{display: 'block', float:'left', fontSize:'16px'}}><b>Detention Truck</b></li>
                       <li style={{display: 'block', textAlign:'right'}} pullLeft><b>Value:</b> <Badge>2 cr</Badge></li>
                     </ul>
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Trip id</b>: <span>123456</span><br />
                            <b>Transporter</b>: <span>VRL Logistic</span>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>From</b>: <span>Mumbai</span><br />
                            <b>To</b>: <span>Bangalore</span>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>
                      
                      <br />
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Driver Details</b>
                            <h5>Rahul(+91-9876543210)</h5>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>Last Known Details</b>
                            <h5>Kolhapur(26-oct-2017, 11:12 PM)</h5>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <br />
                <Row>
                  <Col sm={6}>
                    <div style={{background:'white', paddingBottom:'10px'}}> 
                    <br />
                     <ul style={{padding:'15px', borderLeft:'5px solid #ff66ff'}}>
                       <li style={{display: 'block', float:'left', color:'#ff66ff', fontSize:'16px'}}><b><i class="fa fa-rupee" style={{fontSize:'25px'}}></i>High Value Shipment</b> &nbsp; <Badge style={{color:'white', background:'#ff66ff'}}>One Time</Badge></li>
                       <li style={{display: 'block', textAlign:'right'}} pullLeft>Value: <Badge style={{color:'#ff66ff', background:'#ffe6e6'}}>25 cr</Badge></li>
                     </ul>
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Trip id</b>: <span>123456</span><br />
                            <b>Transporter</b>: <span>VRL Logistic</span>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>From</b>: <span>Mumbai</span><br />
                            <b>To</b>: <span>Bangalore</span>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>
                      
                      <br />
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Driver Details</b>
                            <h5>Rahul(+91-9876543210)</h5>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>Last Known Details</b>
                            <h5>Kolhapur(26-oct-2017, 11:12 PM)</h5>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>

                      <br />
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Item</b>
                            <h5>TMT Steel Bar</h5>
                            
                            <div>
                              <Button><a onClick={() => this.setState({ showText: !this.state.showText })}>See more </a></Button>
                              <Collapse in={this.state.showText}>
                                <div>
                                  <span>
                                    Some more texts here...  here hidden code.         
                                  </span>
                                </div>
                              </Collapse>
                            </div>
                          </Col>
                          <Col sm={6} style={{borderLeft:'1px solid  #f2f2f2'}}>
                            <b>Last Known Details</b>
                            <h5>Kolhapur(26-oct-2017, 11:12 PM)</h5>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>

                    </div>
                    
                  </Col>
                  <Col sm={6}>
                  <div style={{background:'white', paddingBottom:'10px'}}> 
                    <br />
                     <ul style={{padding:'20px', borderLeft:'5px solid #4eed8a'}}>
                       <li style={{display: 'block', float:'left', color:'#4eed8a', fontSize:'16px'}}><b> <i class="fa fa-question-circle" style={{fontSize:'24px'}}></i>Do You Know</b></li>
                          </ul>
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Trip id</b>: <span>123456</span><br />
                            <b>Transporter</b>: <span>VRL Logistic</span>
                          </Col>
                          <Col sm={6} style={{}}>
                            {/* <b>From</b>: <span>Mumbai</span><br />
                            <b>To</b>: <span>Bangalore</span>
                         */}
                         <Button>Start Tracing</Button>
                          </Col>
                        </Row>
                        </li>
                      </ul>
                      
                      <br />
                      
                    </div>
                    <br />
                    <div style={{background:'white', paddingBottom:'10px'}}> 
                    <br />
                     <ul style={{padding:'20px', borderLeft:'5px solid #89edda'}}>
                       <li style={{display: 'block', float:'left', fontSize:'18px', color:'#89edda'}}><b><i class="fa fa-truck" style={{fontSize:'24px'}}></i>
Transporter Details</b></li>
                       
                    </ul>
                      <ul style={{paddingLeft:'18px'}}>
                        <li style={{display:'block'}}>
                        <Row>
                          <Col sm={6}>
                            <b>Trip id</b>: <span>123456</span><br />
                            <b>Transporter</b>: <span>VRL Logistic</span>
                          </Col>
                          <Col sm={6}>
                            {/* <b>From</b>: <span>Mumbai</span><br />
                            <b>To</b>: <span>Bangalore</span> */}
                            <Button>View All</Button>
                        
                          </Col>
                        </Row>
                        </li>
                      </ul>
                      
                      <br />
                      
                    </div>
                  </Col>
                </Row>

                </form>
        </Tab.Pane>
        <Tab.Pane eventKey="Trips">Trips</Tab.Pane>
        <Tab.Pane eventKey="Tracking">Tracking</Tab.Pane>
        <Tab.Pane eventKey="Transport">Transport</Tab.Pane>
        <Tab.Pane eventKey="Analytics">Analytics</Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Container>



         
      </div>
    );
  }
}

export default Home;
