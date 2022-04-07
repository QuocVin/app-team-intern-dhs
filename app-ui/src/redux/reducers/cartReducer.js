const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CART":
      let check = true;
      state.products.forEach((item) => {
        if (item.product.id === action.payload.product.id) {
          check = false;
        }
      });

      const products = [...state.products];
      let total = state.total;
      let quantity = state.quantity;

      if (check) {
        products.push(action.payload);
        total += action.payload.product.price * action.payload.detail.qnt;
        quantity += 1;
      }

      return {
        ...state,
        quantity,
        products,
        total,
      };

    case "MINUS_QUANTITY":
      state.products[action.payload].detail.qnt -= 1;

      const newArr = state.products.filter((item) => item.detail.qnt > 0);
      const newQuantity = newArr.length;
      const newTotal =
        state.total - state.products[action.payload].product.price;

      return {
        ...state,
        quantity: newQuantity,
        products: newArr,
        total: newTotal,
      };

    case "PLUS_QUANTITY":
      let newQnt = state.products[action.payload].detail.qnt;
      let newTl = state.total;
      if (newQnt < state.products[action.payload].detail.quantity) {
        newQnt = Number(newQnt) + 1;
        newTl += state.products[action.payload].product.price;
      }
      state.products[action.payload].detail.qnt = newQnt;

      return {
        ...state,
        total: newTl,
      };
    default:
      return state;
  }
};
export default cartReducer;