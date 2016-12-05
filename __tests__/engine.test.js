import passwordEngine from '../src/spicerack';
import engineV1 from '../src/spicerack/engine-v1';

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
