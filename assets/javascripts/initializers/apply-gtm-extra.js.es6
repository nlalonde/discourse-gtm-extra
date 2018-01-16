import { withPluginApi } from 'discourse/lib/plugin-api';

function initializeGTMExtra(api) {
  api.addGTMPageChangedCallback((gtmData) => {
    gtmData.authenticated = api.getCurrentUser() ? 'Authenticated' : 'Not Authenticated';
    gtmData.locale = I18n.currentLocale();
  });
}

export default {
  name: "apply-gtm-extra",

  initialize() {
    withPluginApi('0.8.16', initializeGTMExtra);
  }
};
