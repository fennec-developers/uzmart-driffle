import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("store", "routes/store.tsx"),
  route("topups", "routes/topups.tsx"),
  route("product", "routes/product.tsx"),
  route("cart", "routes/cart.tsx"),
  route("checkout", "routes/checkout.tsx"),
  
  // A single, non-nested route for the entire dashboard
  route("dashboard", "routes/dashboard.tsx"),

] satisfies RouteConfig;
