export const dispatchHandleCart = (data) => {
    return {
        type: 'HANDLE_CART',
        payload: data,
    };
};

export const dispatchMinusQuantity = (index) => {
    return {
        type: 'MINUS_QUANTITY',
        payload: index,
    };
};

export const dispatchPlusQuantity = (index) => {
    return {
        type: 'PLUS_QUANTITY',
        payload: index,
    };
};
