import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit(model) {

      model.save().then(() => {
        this.transitionToRoute('reminders.reminder', model);
      })
    }
  }
});
