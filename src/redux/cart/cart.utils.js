export const addItemToCart = (items, itemToAdd) => {
  const ifExist = items.find((item) => item.id === itemToAdd.id);
  if (ifExist) {
    return items.map((item) =>
      item.id === itemToAdd.id
        ? { ...itemToAdd, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const decreaseItemQuanityFromCart = (items, itemToRemove) => {
  const ifExist = items.find((item) => item.id === itemToRemove.id);
  if (ifExist.quantity === 1) {
    return items.filter((item) => item.id !== itemToRemove.id);
  }

  return items.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
