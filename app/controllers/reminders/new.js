import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select(model) {
      model.save()
    }
  }
});
