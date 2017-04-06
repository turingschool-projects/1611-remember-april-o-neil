/* globals server */
import Ember from 'ember';

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit');

test('redirects to edit page on click', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders/1');
  click('.edit-button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit');
  });
});

test('redirects to reminder when save is clicked', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders/1');
  click('.edit-button');
  click('.save-button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
  });
});

test('edits title of reminder', function(assert) {
  server.createList('reminder', 1);

  visit('/reminders');
  click('.reminder-item');
  click('.edit-button');

  fillIn('.title', 'Hey My').then(function() {
    click('.save-button');
  });

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal(Ember.$('.active-title').text().trim(), 'Hey My');
  });
});
