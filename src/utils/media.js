const greaterThan = size => window.innerWidth > size;
const lessThan = size => window.innerWidth < size;

const breakpoints = [
  { name: 'phone', size: 599 },
  { name: 'tabletLandscape', size: 900 },
  { name: 'desktop', size: 1200 },
  { name: 'bigDesktop', size: 1800 },
];

const createAliases = f => Object.assign(
  f, breakpoints.reduce(
    (acc, { name, size }) => ({ ...acc, [name]: f.bind(null, size) }),
    {}
  )
);

const media = {
  greaterThan: createAliases(greaterThan),
  lessThan: createAliases(lessThan),
};

export default media;
