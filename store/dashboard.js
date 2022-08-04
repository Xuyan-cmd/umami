import create from 'zustand';
import { DASHBOARD_CONFIG, DEFAULT_WEBSITE_LIMIT } from 'lib/constants';
import { getItem, setItem } from 'lib/web';

export const initialState = {
  showCharts: true,
  limit: DEFAULT_WEBSITE_LIMIT,
  websiteOrder: {},
  editing: false,
};

const store = create(() => ({ ...initialState, ...getItem(DASHBOARD_CONFIG) }));

export function saveDashboard(settings) {
  const state = typeof settings === 'function' ? settings(store.getState()) : settings;
  store.setState(state);

  setItem(DASHBOARD_CONFIG, store.getState());
}

export default store;
