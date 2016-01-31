'use strict';

import alt from 'components/Dispatcher';
import { TodoStore } from 'stores//TodoStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('TodoStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, TodoStore);
  });
});
