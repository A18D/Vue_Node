export default {
  'style-Hint': {
    margin: '0px',
    marginBottom: '200px',
    right: '15px',
    position: 'absolute',
    listStyleType: 'none',
    '& > li': {
      '&.timer': {
        marginTop: '0px',

        '& > p': {
          /*цвет рамки для таймера*/
          border: '1px solid rgb(65, 138, 233)',

          '&:before': {
            background: 'rgb(65, 138, 233)',
          },

          '&:after': {
            borderTop: '20px solid rgb(65, 138, 233)',
          },
        },
      },

      '&.mark': {
        marginTop: '120px',

        '& > p': {
          border: '1px solid rgb(29, 126, 4)',

          '&:before': {
            background: 'rgb(29, 126, 4)',
          },

          '&:after': {
            borderTop: '20px solid rgb(29, 126, 4)',
          },
        },
      },

      '&.coins': {
        marginTop: '120px',

        '& > p': {
          border: '1px solid rgb(221, 134, 4)',

          '&:before': {
            background: 'rgb(221, 134, 4)',
          },

          '&:after': {
            borderTop: '20px solid rgb(221, 134, 4)',
          },
        },
      },
    },

    '@global p': {
      textDecoration: 'none',
      textAlign: 'center',
      position: 'absolute',
      background: 'rgb(255, 255, 255)',

      display: 'block',
      width: '200px',
      height: '70px',
      right: '15px',
      marginTop: '20px',

      '&:after': {
        position: 'absolute',
        content: '""',
        width: '0px',
        height: '0px',
        bottom: '38px',
        left: 'calc(60% - 10px)',
        borderRight: '20px solid transparent',
      },

      '&:before': {
        position: 'absolute',
        content: 'attr(data-tooltip)',
        width: '180px',
        height: '40px',
        lineHeight: '40px',
        bottom: '50px',
        left: 'calc(40% - 70px)',
        color: 'white',
      },
    },

    '@global span': {
      position: 'absolute',
      left: '0px',
      width: '100%',
      height: '100%',
      lineHeight: '46px',
      overflow: 'hidden',
      paddingTop: '25px',
      color: 'black',
    },
  },
};
