import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'al-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

    public links: any[] = [
        {name: 'Twitter', path: ''},
        {name: 'Facebook', path: 'facebook'},
        {name: 'WhatsApp', path: 'whatsapp'},
        {name: 'E-mail', path: 'email'}
    ];

    constructor() { }

    ngOnInit() {
    }

}
