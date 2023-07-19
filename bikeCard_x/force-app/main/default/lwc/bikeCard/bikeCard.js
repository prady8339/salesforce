import { LightningElement } from 'lwc';

// The 'BikeCard' class extends 'LightningElement'
export default class BikeCard extends LightningElement {
    // Properties for the bike information
    name = 'Electra X4';
    description = 'A sweet bike built for comfort.';
    category = 'Mountain';
    material = 'Steel';
    price = '$2,700';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}
