import DomainColors from '../src/colors';

describe('Brand Color', () => {
  it('match facebook', () => {

        let color = DomainColors.match('facebook.com');

        expect(color.background).toBe('#3b5998');
        expect(color.color).toBe('#fff');

    });

    it('match nothing', () => {

        let color = DomainColors.match('g100g.net');

        expect(color).toBe("");

    });
});
