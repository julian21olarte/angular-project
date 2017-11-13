import { Component, OnInit } from '@angular/core';
import { fadeLateral } from "../../animations/fadeLateral";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  animations: [fadeLateral]
})

export class ContactComponent implements OnInit {
  title = 'Contacto';
  constructor() { }

  ngOnInit() { }
}