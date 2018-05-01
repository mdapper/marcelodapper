import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';

import 'assets/styles/normalize.css';
import 'assets/styles/elements.css';

import App from 'App';
import * as serviceWorker from 'utils/serviceWorker';

// React Intl Configs
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import messages from 'i18n/messages';
import flattenMessages from 'i18n/utils';

addLocaleData([...en, ...pt]);

let locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  'pt-BR';

if (locale === 'pt') {
  locale = 'pt-BR';
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
