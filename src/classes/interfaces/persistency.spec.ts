import { Persistency } from '../../services/persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks depois de cada teste
  it('should returned undefined', () => {
    //system under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });
  it('should call console.log once', () => {
    //system under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    //system under test
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  }); //testa se o conteudo de console.log é exatamente igual ao esperado
});
