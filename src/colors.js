const colors = {
  'twitter': '#1da1f2',
  'facebook': '#3b5998'
};

const DomainColors = {

  match(domain) {
    return Object.keys(colors)
                          .filter(color => domain.indexOf(color) !== -1)
                          .reduce((result, color) => colors[color], '');

  }

};

export default DomainColors;
