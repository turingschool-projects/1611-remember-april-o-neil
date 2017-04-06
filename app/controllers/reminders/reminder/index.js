import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(model) {
        model.destroyRecord();
        this.transitionToRoute('reminders');
    }
  }
});
