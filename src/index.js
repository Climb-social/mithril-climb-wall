require('./main.scss');
const m = require('mithril');

(function (m, document) {

    let $targets = document.querySelectorAll('.climb-wall');

    var climb = {};

    climb.Collection = {
        feed(climbId) {
            "use strict";

            return m.request({
                dataType: "jsonp",
                url: `http://app.climb.social/api/v1/collections/${climbId}`
            });
        }
    };

    climb.Wall = {

        controller: function (climbId, limit) {
            var feed = climb.Collection.feed(climbId);
            return {
                feed, limit
            }

        },

        view: function (ctrl) {
            "use strict";
            return m('div.climb__wall', [
                ctrl.feed().map(function (item, index) {
                    if (index < ctrl.limit){
                        return m.component(climb.Tile, {item: item});
                    }
                })
            ]);
        }
    };

    climb.Tile = {

        controller: function (args) {
            "use strict";
            return {item: args.item}
        },

        view: function (ctrl) {
            "use strict";
            return m('div.climb__tile', {className: `climb__tile--${ctrl.item.source_type}`},

                [
                    ctrl.item.image ? [
                        m('img', {src: ctrl.item.image.url, className: 'climb__tile__media'})
                    ] : null,

                    m('div.climb__tile__content', [

                        ctrl.item.message ? [
                            m('div.climb__tile__message', m.trust(ctrl.item.message))
                        ] : null

                    ])
                ]
            );
        }
    };


    for (let i = 0; i < $targets.length; ++i) {
        let $item = $targets[i];
        let climbId = $item.dataset.collectionId;
        let limit = $item.dataset.limit;
        m.mount($targets[i], {
            controller: climb.Wall.controller.bind(climb.Wall.controller, climbId, limit),
            view: climb.Wall.view
        });
    }


})(m, document);
