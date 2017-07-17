var orderCount = 0;
function takeOrder(topping, crustType) {
  orderCount++;
  console.log('Order: '+ crustType +' crust pizza topped with'+ topping);
  console.log(getSubTotal(orderCount));
}

function getSubTotal (itemCount) {
  return itemCount*7.5;
}

function getTax () {
  return getSubTotal(orderCount)*0.06;
}

function getTotal () {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin');

takeOrder('egg', 'meaf');
takeOrder('beef', 'mogo');
takeOrder('slive', 'mushroom');
console.log(getTotal());