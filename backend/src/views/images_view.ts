/* eslint-disable no-underscore-dangle */
import Images from '../models/Images';

export default {
  render(image: Images) {
    return {
      url: `http://192.168.0.109:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Images[]) {
    return images.map(image => this.render(image));
  },
};
