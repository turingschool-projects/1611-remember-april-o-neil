import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: () => faker.lorem.words().capitalize(),
  body: () => faker.lorem.paragraph(),
  date: () => faker.date.recent(3),
});
