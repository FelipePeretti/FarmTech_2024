import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-create',
  standalone: false,
  //imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  templateUrl: './sensor-create.component.html',
  styleUrls: ['./sensor-create.component.scss'],
})
export class SensorCreateComponent implements OnInit {
  sensorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.sensorForm = this.formBuilder.group({
      nomeSensor: ['', Validators.required],
      tipoSensor: ['', Validators.required],
      localizacao: ['', Validators.required],
      dataInstalacao: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.sensorForm.valid) {
      // Aqui você pode enviar os dados para o backend ou fazer o que for necessário com eles
      console.log(this.sensorForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
