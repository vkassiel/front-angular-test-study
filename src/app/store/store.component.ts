import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { RequestService } from './../request.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  objectKeys = Object.keys;
  plans: String[] = ['Saude Basic', 'Saude Pro', 'Saude Enterprise'];

  constructor(private formBuilder: FormBuilder, private RequestService: RequestService) { }

  proposal = this.formBuilder.group(
    {
      cpf: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      product: this.formBuilder.control('')
    }
  );

  sendData() {
    this.RequestService.post('http://localhost:5000/proposal', this.proposal.value).subscribe((response) => {
      console.log('response', response);
    });
  };
}
