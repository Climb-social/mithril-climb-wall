/**
 * Created by michele on 11/09/15.
 */

var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'src/app.js',
    out: 'dist',
    clearBeforeBuild: true,
    html: function (context) {
        return {
            'index.html': context.defaultTemplate({
                html: `<div class="climb-wall" data-collection-id="55a7d29945284ef60c0ce772"></div>`
            })
        }
    }
});