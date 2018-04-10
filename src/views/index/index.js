import '@/assets/sass/pageIndex/index.scss';
import 'core-js/fn/promise';

function pageInit () {
  require.ensure([], require => {
    const Zepto = require('zepto');
    console.log(Zepto);
  }, 'zepto');
}

pageInit();
