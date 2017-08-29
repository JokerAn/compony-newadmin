import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';

import actions from '../store2/actions'
import mutations from '../store2/mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    mutations
  },
  getters,
  actions
});

export default store
