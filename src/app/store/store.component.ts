import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  objectKeys = Object.keys;
  plans: String[] = ['Saude Basic', 'Saude Pro', 'Saude Enterprise'];

  constructor(private formBuilder: FormBuilder) { }

  proposal = this.formBuilder.group(
    {
      cpf: this.formBuilder.control(''),
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      product: this.formBuilder.control('')
    }
  );

  sendData() {
    console.log(this.proposal.value)
  };
}
