var climb = {};

climb.Collection = {
    feed() {
        "use strict";
        const COLLECTION_ID = '55c1e00845284e26681c4929';

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
        return {item: args.item}
    },

    view: function (ctrl) {
        "use strict";
        return m('div.climb__tile', m.trust(ctrl.item.message));
    }
};


//initialize
m.mount(document.body, climb.Wall);