import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import "./style.css";
 


function VendorCard(props) {
  console.log(props)
  let active;
  if (props.vendor) {
    active = (props.vendor);
  }
  else {
    active = {
      "_id": "2468",
      "vendor_name": "Virtual Host",
      "image": "../images/virtualHost.png",
      "beacon_id": "1234",
      "web_url": "https://virtual-host.herokuapp.com/",
      "description": "Virtual Host Using notifications on your phone to guide you through the event, informing you along the way.",
      "manager_id": "1",
      "category": "IT ",
      "event_id": "2222"
    }
  }
  return (

    <Card id="card" href={"/vendor/?q="+active._id}>
      <Grid.Column >        
        <Card.Content>
          <Image src={active.image} wrapped ui={true} />
          <Card.Header id='vendorName'>{active.vendor_name}</Card.Header>
          <Card.Description id='describeIt'>
            {active.description}
            <br/>
          </Card.Description>
        </Card.Content>
        <br/> 
        <br/>  
          Click Card for More Details
        <br/> 
        <br/>
      </Grid.Column>
    </Card>
  )
}


export default VendorCard;


