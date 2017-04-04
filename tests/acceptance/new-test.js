/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | new');

test('visiting /new', function(assert) {
  server.createList('reminder', 5);

  visit('reminders/new')


  andThen(function() {
    assert.equal(currentURL(), 'reminders/new');
  });
});

test('redirects to new on click', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('a:last')


  andThen(function() {
    assert.equal(currentURL(), '/reminders/new')
  });
});

test('adding a new reminder', function(assert) {
  server.createList('reminder', 5);

  visit('reminders/new')
  fillIn('input:first', 'My new post')
  click('.submit-button')

  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 6);
  });
});
