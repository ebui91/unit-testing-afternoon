const cart= require('./cart.js');
const cars= require('./data/cars.js');


describe('Cart Properties: ', ()=> {
  test('Cart should be an empty array by default.', ()=> {
    expect(Array.isArray(cart.cart)).toEqual(true);
    expect(cart.cart.length).toEqual(0);
  });

  test('Cart total should be 0 by default.', ()=> {
    expect(cart.total).toEqual(0);
  });
});

describe('Cart Methods:', ()=> {
  afterEach(()=> {
    cart.cart= [];
    cart.total= 0;
  });

  test('addToCart() should add a car object to the cart array.', ()=> {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    expect(cart.cart.length).toEqual(3);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[1]);
    expect(cart.cart[2]).toEqual(cars[2]);
  });

  test('addToCart() should increase the cart total.', ()=> {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    expect(cart.total).toEqual(cars[0].price + cars[1].price + cars[2].price);
  });

  test('removeFromCart() should remove a car object from the cart array.', ()=> {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.removeFromCart(1, cars[1].price);

    expect(cart.cart.length).toEqual(2);
    expect(cart.cart[0]).toEqual(cars[0]);
    expect(cart.cart[1]).toEqual(cars[2]);
  });

  test('removeFromCart() should decrease the cart total.', ()=> {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);

    cart.removeFromCart(0, cars[0].price);

    expect(cart.total).toEqual(cars[1].price + cars[2].price);
  });

  test('checkout() shoud empty the cart array and set total to 0.', function() {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);
    cart.addToCart(cars[3]);

    cart.checkout();

    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0);
  });
});
