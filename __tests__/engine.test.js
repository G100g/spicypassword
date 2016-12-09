import passwordEngine from '../src/spicerack';
import engineV2, { addSymbol, symbols } from '../src/spicerack/engine-v2';

describe('Password Engine', () => {
  it('return an object', () => {
        expect(typeof passwordEngine).toBe('object');
    });

  it('return engines versions', () => {
      expect(passwordEngine.getEngines().length).toBeGreaterThanOrEqual(0);
    });

  it('set engine version', () => {
      let expected = 1;
      let result = passwordEngine.setVersion(expected);
      expect(result).toBe(expected);

      result = passwordEngine.getVersion(expected);
      expect(result).toBe(expected);

    });

  it('has build method', () => {

      let versions = passwordEngine.getEngines();

      versions.forEach((version) => {

          passwordEngine.setVersion(version);

          expect(typeof passwordEngine.build()).toBe('string');
          expect(typeof passwordEngine.build(null, null)).toBe('string');
          expect(typeof passwordEngine.build([], null)).toBe('string');

        });

    });

    // it('return an object', () => {
    //     expect(typeof engine).toBe('object');
    //     expect(type engine.build).toBe('function');
    // });
});


describe('Engine V2', () => {

  function testSymbol(expected, lenght) {
      it(`return ${expected} using ${lenght}`, () => {

        let result = addSymbol(lenght);
        expect(result).toBe(expected);

      });
  }

  const total = 101;

  // Step must be the number of symbols array
  const steps = symbols.length;

  for(let i = 0; i < total; i += steps) {
    testSymbol('#', i);
  }

  for(let i = 1; i < total; i += steps) {
    testSymbol('%', i);
  }

  for(let i = 2; i < total; i += steps) {
    testSymbol('^', i);
  }

});
