import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { preloader } from './modules/preloader';
import { hiddenBlock } from './modules/hidden-block';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
preloader();
hiddenBlock();
