/* globals server */

import Ember from 'ember';

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | delete');

test('delete button renders', function(assert) {
  server.createList('reminder', 5);

  visit('reminders/1');

  andThen(function() {
    assert.equal(Ember.$('.delete-button').length, 1);
  });
});

test('when clicked, delete removes reminder and redirects to /reminders', function(assert) {
  server.createList('reminder', 5);

  visit('reminders/');
  click('a:first');
  click('.delete-button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item').length, 4);
  });
});
