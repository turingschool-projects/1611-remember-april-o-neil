import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // going to store and trying to find all reminder
    return this.get('store').findAll('reminder');
  }
});
