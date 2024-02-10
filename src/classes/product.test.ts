import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks depois de cada teste
  it('should have properties name and price', () => {
    //system under test
    const sut = createSut('camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'camiseta');
    expect(sut.price).toBeCloseTo(49.9); //para testar valores de ponto flutuante use o toBeCloseTo
  });
});
