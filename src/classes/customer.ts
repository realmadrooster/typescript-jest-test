import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder{
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = '';
  }

  getName(): string {
    return this.firstName + '' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  Name: string;
  cnpj: string;

  constructor(Name: string, cnpj: string) {
    this.Name = Name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.Name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
