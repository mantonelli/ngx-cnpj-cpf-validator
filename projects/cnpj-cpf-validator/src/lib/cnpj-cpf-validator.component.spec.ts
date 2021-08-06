import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpjCpfValidatorComponent } from './cnpj-cpf-validator.component';

describe('CnpjCpfValidatorComponent', () => {
  let component: CnpjCpfValidatorComponent;
  let fixture: ComponentFixture<CnpjCpfValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnpjCpfValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnpjCpfValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
