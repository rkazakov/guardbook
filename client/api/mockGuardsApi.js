import guards from '../data/guards';

const delay = 1000;

class GuardsApi {
  static getAllGuards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], guards));
      }, delay);
    });
  }
}

export default GuardsApi;
