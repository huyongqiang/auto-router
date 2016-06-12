/**
 *
 * @authors yuqiu (yuqiu@luojilab.com)
 * @date    2016-03-07 15:09:01
 * @version $Id$
 */
var fs = require('fs')
var routerConfig = function(app, options) {
	options.map = options.map || {};
	var files = fs.readdirSync(options.dirPath);
	files.forEach(function(file) {
		var name = file.split('.')[0];
		var el =  options.map[name] || '/' + name;
		app.use(el, require(options.dirPath + name))
	})
}

module.exports = routerConfig;
