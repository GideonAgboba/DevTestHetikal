import Axios from '../redux/Axios';

export const Helper = {
  formatToNaira(amout) {
    const e = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000];

    amout = parseFloat(amout);

    const pieces = amout.toFixed(0).replace('.', '.').split('');

    let ii = pieces.length - (0 ? 0 + 1 : 0);

    while ((ii -= 3) > 0) {
      pieces.splice(ii, 0, ',');
    }

    return '₦' + pieces.join('');
  },
};
