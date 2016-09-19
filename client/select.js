

Template.countrySelect.events({
    
    'change #country-selector': function(event, tpl) {
        var country = $(event.currentTarget).find(':selected').attr('data-filename');
        States.selectedCountry.set(country);
    }

});

Template.countrySelect.helpers({
    
    countries: function() {
        return States.countries;
    }

});

Template.stateSelect.onCreated(function() {
    var self = this;
    self.statesList = new ReactiveVar();

    Tracker.autorun(function() {

        Meteor.call('getStates', States.selectedCountry.get(), function(error, response) {
            self.statesList.set(response);
        });

    });

});


Template.stateSelect.helpers({
    
    states: function() {
        return Template.instance().statesList.get();
    }

});

