export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | {
      type: "ADD_ITEM";
      payload: Omit<CartItem, "quantity"> & { quantity?: number };
    }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "INCREMENT_ITEM"; payload: { id: string } }
  | { type: "DECREMENT_ITEM"; payload: { id: string } }
  | { type: "CLEAR_CART" };

export const initialState: CartState = {
  items: []
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    // Add a new item or increase the quantity if it already exists
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      // If the item doesn't exist, add it to the cart with a default quantity of 1
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity ?? 1 }
        ]
      };
    }

    // Remove an item entirely from the cart
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id)
      };

    // Increment the quantity of an existing item
    case "INCREMENT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    // Decrement the quantity of an existing item
    case "DECREMENT_ITEM":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with zero quantity
      };

    // Clear the entire cart
    case "CLEAR_CART":
      return initialState;

    // Return the current state if the action is unrecognized
    default:
      return state;
  }
}
