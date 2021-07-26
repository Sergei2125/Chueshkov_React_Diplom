import api from "../../../api/config";

export const getOrders = () => api.get("/order");
