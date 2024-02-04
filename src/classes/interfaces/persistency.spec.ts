describe('TESTANDO ALGUMA COISA',() => {
  it('should return 1', () => {
    const number = 1;
    expect(number).toBe(1);
  });
})

describe('TESTANDO OUTRA COISA', () => {
  test('should return Luiz',() => {
    const nome = 'Luiz';
    expect(nome).not.toBe('Luiz');
  });
})

