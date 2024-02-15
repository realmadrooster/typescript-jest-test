import { IndividualCustomer, EnterpriseCustomer } from '../customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); //limpa os mocks depois de cada teste

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    //system under test
    const sut = createIndividualCustomer('Luiz', 'Carlos', '111.111.111-90');
    expect(sut).toHaveProperty('firstName', 'Luiz');
    expect(sut).toHaveProperty('lastName', 'Carlos');
    expect(sut).toHaveProperty('cpf', '111.111.111-90');
  });

  it('should have methods to get name and idn', () => {
    //system under test
    const sut = createIndividualCustomer('Luiz', 'Carlos', '111.111.111-90');
    expect(sut.getName()).toBe('Luiz Carlos');
    expect(sut.getIDN()).toBe('111.111.111-90');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    //system under test
    const sut = createEnterpriseCustomer('udemy', '222');
    expect(sut).toHaveProperty('name', 'udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for entreprise customers', () => {
    //system under test
    const sut = createEnterpriseCustomer('udemy', '222');
    expect(sut.getName()).toBe('udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
