/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit');

test('redirects to edit on click', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders/1');
  click('.edit-button');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1/edit');
  });
});
