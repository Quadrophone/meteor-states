
Meteor.methods({

    getStates: function(country) {
        if (country !== 'undefined') {
            var states = Assets.getText('private/states/' + country + '.json');
            states = JSON.parse(states);
            return states;
        }
    }

});

