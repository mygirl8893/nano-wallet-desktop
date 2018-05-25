import DS from 'ember-data';

import { attr, belongsTo } from 'ember-decorators/data';

const { Model } = DS;

export default Model.extend({
  @belongsTo('account', { async: true }) source: null,

  @attr type: null,
  @attr account: null,
  @attr('big-number') amount: null,
});
