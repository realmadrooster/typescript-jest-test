import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (classname: new () => Discount): Discount => {
  return new classname();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks depois de cada teste
  it('should have no discount', () => {
    //system under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });
  it('should apply 50% discount on price', () => {
    //system under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBe(75.25);
  });
  it('should apply 10% discount', () => {
    //system under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBe(9);
  });
});
