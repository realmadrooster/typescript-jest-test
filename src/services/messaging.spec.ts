import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); //limpa os mocks depois de cada teste
  it('should returned undefined', () => {
    //system under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });
  it('should call console.log once', () => {
    //system under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with "Mensagem enviada:", and msg', () => {
    //system under test
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('mensagem enviada:', 'teste');
  }); //testa se o conteudo de console.log é exatamente igual ao esperado
});
