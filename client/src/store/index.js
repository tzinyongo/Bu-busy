import weightModule from './Weight-room';
import courtsModule from './courts';
import { createStore } from 'vuex';

const store = createStore({
  modules: {
    'Weight-room': weightModule,
    'courts': courtsModule,
  },
});

export default store;