module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'src/tpl/',
          src: ['*.html', '**/*.html'],
          dest: 'demo/tpl/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}