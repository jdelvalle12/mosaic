module.exports = {
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
    
    theme: {
      extend: {
        colors: {
          primary: '#008080',
        },
        fontFamily: {
          body: ['Source Code Pro', 'Space Grotesk', 'sans-serif'],
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
      },
    },
    plugins: [],
    corePlugins: {
      content: false,
    },
    utilities: {
      content: {
        auto: 'content-visibility: auto',
      },
    },
  };