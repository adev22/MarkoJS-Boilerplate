let template = require('../views/hello.marko');
template.renderSync({}).appendTo(document.body);