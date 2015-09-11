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
        return m('div', [
            ctrl.feed().map(function (item) {
                return m('div', item.message);
            })
        ]);
    }
};


//initialize
m.mount(document.getElementById("climb-wall"), climb.Wall);