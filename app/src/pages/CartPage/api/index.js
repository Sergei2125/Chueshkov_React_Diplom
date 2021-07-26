import api from "../../../api/config";

export const getCartState = () => api.get("/cart");

export const addToCardItem = (body) => api.post("/cart/item", body);

export const removeItem = (id) => api.delete(`/cart/item/${id}`);

export const addQuantityItem = (body) => api.patch("/cart/item", body);

export const makeOrder = (body) => api.post("/order", body);
