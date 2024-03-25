import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {  
  form: FormGroup;

  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      logradouro: new FormControl({value: '', disabled: true}, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.form.get('cep')!.valueChanges.subscribe(cep => {
      if (cep.length === 8) {
        this.buscarCep(cep).subscribe(dados => this.form.get('logradouro')!.setValue(dados.logradouro));
      }
    });
  }

  buscarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    this.http.get(url).subscribe(dados => {
      if (!dados.erro) {
        this.form.patchValue({
          logradouro: dados.logradouro,
          // Você pode adicionar aqui outras propriedades que deseja preencher automaticamente
        });
      }
    });
  }

  salvar() {
    if (this.form.valid) {
      console.log('Formulário válido!', this.form.value);
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
    } else {
      alert('Formulário inválido');
    }
  }

  cancelar() {
  
  }
}