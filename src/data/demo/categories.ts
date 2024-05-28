import CategoryData from '@data/faker/category';

const men: CategoryData = new CategoryData({
  id: 4,
  name: 'Men',
  description: 'T-shirts, sweaters, hoodies and men\'s accessories.',
  position: 1,
  displayed: true,
  products: ['demo_1'],
});
const women: CategoryData = new CategoryData({
  id: 5,
  name: 'Women',
  description: 'T-shirts, sweaters, hoodies and women\'s accessories. From basics to original creations, '
        + 'for every style.',
  position: 2,
  displayed: true,
  products: ['demo_3'],
});
const stationnery: CategoryData = new CategoryData({
  id: 7,
  name: 'Stationery',
  description: 'Notebooks, agendas, office accessories and more.',
  position: 1,
  displayed: true,
  products: ['demo_8', 'demo_9', 'demo_10'],
});
const homeAccessories: CategoryData = new CategoryData({
  id: 8,
  name: 'Home Accessories',
  description: 'Details matter! Liven up your interior with our selection of home accessories.',
  position: 2,
  displayed: true,
  products: ['demo_11', 'demo_12', 'demo_13', 'demo_14', 'demo_15', 'demo_16', 'demo_17', 'demo_21'],
});

export default {
  home: new CategoryData({
    id: 2,
    name: 'Home',
    description: '',
    metaTitle: '',
    metaDescription: '',
    displayed: true,
  }),
  clothes: new CategoryData({
    id: 3,
    name: 'Clothes',
    description: 'Discover our favorites fashionable discoveries, a selection of cool items to integrate in your '
            + 'wardrobe. Compose a unique style with personality which matches your own.',
    position: 1,
    displayed: true,
    children: [
      men,
      women,
    ],
    products: men.products.concat(women.products),
  }),
  men,
  women,
  accessories: new CategoryData({
    id: 6,
    name: 'Accessories',
    description: 'Items and accessories for your desk',
    position: 2,
    displayed: true,
    children: [
      stationnery,
      homeAccessories,
    ],
    products: stationnery.products.concat(homeAccessories.products),
  }),
  stationery: stationnery,
  homeAccessories,
  art: new CategoryData({
    id: 9,
    name: 'Art',
    description: 'Framed poster and vector images',
    position: 3,
    displayed: true,
    products: ['demo_5', 'demo_6', 'demo_7', 'demo_18', 'demo_19', 'demo_20'],
  }),
};
