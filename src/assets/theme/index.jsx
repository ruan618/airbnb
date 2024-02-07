const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A'

  },
  textColor: {
    primaryColor: '#222222',
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,.18);
      }
    `
  }
}

export default theme;