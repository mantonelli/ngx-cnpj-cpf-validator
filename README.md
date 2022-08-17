## ngx-cnpj-cpf-validator

Componente para validação de CPF e CNPJ em aplicações Angular (10+).

### Instalação

```shell
npm install ngx-cnpj-cpf-validator --save
```

### Utilização

#### Formulários reativos

app.component.html ([Utiliza biblioteca PO-UI](https://www.npmjs.com/package/@po-ui/ng-components))

```html
<div class="po-wrapper">
  <form [formGroup]="form">
    <div class="po-row">
      <po-input
        class="po-md-3"
        p-label="CNPJ"
        formControlName="cnpj"
        p-mask="99.999.999/9999-99"
      ></po-input>
      <div class="po-row">
        <small
          class="po-md-12 text-danger"
          *ngIf="f.get('cnpj').hasError('cnpjCpfInvalid')"
        >
          CNPJ inválido
        </small>
      </div>
    </div>
    <div class="po-row">
      <po-input
        class="po-md-3"
        p-label="CPF"
        formControlName="cpf"
        p-mask="999.999.999-99"
      ></po-input>
      <div class="po-row">
        <small
          class="po-md-12 text-danger"
          *ngIf="f.get('cpf').hasError('cnpjCpfInvalid')"
        >
          CPF inválido
        </small>
      </div>
    </div>
  </form>
</div>
```

app.component.ts

```javascript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CnpjCpfValidator, TipoPessoa } from 'cnpj-cpf-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
      cnpj: new FormControl(
        '',
        [],
        [CnpjCpfValidator(TipoPessoa.PESSOA_JURIDICA)]
      ),
      cpf: new FormControl(
        '',
        [],
        [CnpjCpfValidator(TipoPessoa.PESSOA_FISICA)]
      ),
    });
  }
}
```

#### Validação em eventos

app.component.html

```html
<form>
  <input #cpf type="text" />
  <button (click)="onValidateCPF(cpf.value)">Validar</button>
</form>
```

app.component.this

```javascript
import { Component, OnInit } from '@angular/core';
import { validaCPF } from 'cnpj-cpf-validator';

@Component({
  selector: 'app-valida-cpf', templateUrl: './app.component.html',
  styleUrls: ['./valida-cpf.component.css'], })

export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onValidateCPF(value: string) {
    if (validaCPF(value)) {
      alert('CPF válido');
    } else {
      alert('CPF inválido');
    }
  }
}
```

#### Funções disponíveis

```javascript
- validaCPF(value: string): boolean
- validaCNPJ(value: string): boolean
- CnpjCpfValidator(tipoPessoa: TipoPessoa): AsyncValidatorFn
```

![https://img.shields.io/badge/BTC-bc1qt68v0vxuz85jvt6qrhhm3x8hz7hj3axy5dr6xz-blue](https://img.shields.io/badge/BTC-bc1qt68v0vxuz85jvt6qrhhm3x8hz7hj3axy5dr6xz-blue)
