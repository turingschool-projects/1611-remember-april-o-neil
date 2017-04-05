import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select() {
      let title = this.get('newTitle');
      let body = this.get('newBody');
      let date = this.get('newDate');

      let reminder = this.store.createRecord('reminder', {
        title,
        body,
        date,
      })

      this.set('newTitle', '')
      this.set('newBody', '')
      this.set('newDate', '')

      reminder.save();
    }
  }
});
