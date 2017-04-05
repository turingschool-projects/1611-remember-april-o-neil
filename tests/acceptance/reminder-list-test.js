/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders');
  click('a:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.reminder-item:first').text().trim(), Ember.$('.active-title').text().trim());
  });
});

test('shows message when there are no reminders', function(assert) {
  server.createList('reminder', 0);

  visit('/reminders');

  andThen(function() {
    assert.equal(Ember.$('.reminder-item').length, 0);
    assert.equal(Ember.$('.no-reminders').length, 1);
  });

  click('a:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
  });
});
