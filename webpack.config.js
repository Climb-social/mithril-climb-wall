/**
 * Created by michele on 11/09/15.
 */

var getConfig = require('hjs-webpack');

var config = getConfig({
    in: 'src/app.js',
    out: 'dist',
    clearBeforeBuild: true,
    html: function (context) {
        return {
            'index.html': context.defaultTemplate({
                html: `<script src="https://cdnjs.cloudflare.com/ajax/libs/mithril/0.2.0/mithril.min.js"></script>
                       <div class="climb-wall" data-collection-id="55a7d29945284ef60c0ce772"></div>`
            })
        }
    }
});

config.externals = {
    mithril: 'm'
};

module.exports = config;