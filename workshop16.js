// ((Price * refill) - subscribtion) - coupon  = Total
//Timmy --> Coupon
//Sarah --> Sub
//Rocky --> Sub && Coupon

function calTotalCost(customer) {
  const totalCost = customer.pricePerRefill * customer.refills;
  return totalCost;
}

function calSubDiscount(totalCost) {
  const subDiscountTotal = totalCost * 0.75;
  return subDiscountTotal;
}

function calCoupDiscount(subDiscountTotal) {
  const coupDiscountTotal = subDiscountTotal - 10;
  return coupDiscountTotal;
}

function checkout(customer) {
  let totalCost = calTotalCost(customer);

  if (customer.subscription) {
    totalCost = calSubDiscount(totalCost);
  }
  if (customer.coupon) {
    totalCost = calCoupDiscount(totalCost);
  }
  console.log("Your grand total is $" + totalCost);
}

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

checkout(timmy);
checkout(sarah);
checkout(rocky);
