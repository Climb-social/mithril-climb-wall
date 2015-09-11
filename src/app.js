var climb = {};

climb.Collection = {
    feed() {
        "use strict";
        const COLLECTION_ID = '55a7d29945284ef60c0ce772';

        return m.request({
            dataType: "jsonp",
            url: `http://app.climb.social/api/v1/collections/${COLLECTION_ID}`
        });
    }
};

climb.Wall = {

    controller: function () {
        var feed = climb.Collection.feed();
        return {
            feed
        }

    },

    view: function (ctrl) {
        "use strict";
        return m('div.climb__wall', [
            ctrl.feed().map(function (item) {
                return m.component(climb.Tile, {item: item});
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
        return m('div.climb__tile', {className: `climb__tile--${ctrl.item.source_type}`}, [

            ctrl.item.image ? [
                m('img', {src: ctrl.item.image.url, className: 'climb__tile__media'})
            ] : null,

            m('div.climb__tile__message', m.trust(ctrl.item.message))
        ]);
    }
};

climb.TileImage = {
    controller: function (args) {
        "use strict";
        return {item: args.item}
    },

    view: function (ctrl) {
        "use strict";

        return m();
    }
};


//initialize
m.mount(document.body, climb.Wall);