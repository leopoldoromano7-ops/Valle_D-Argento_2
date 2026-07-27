import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("struttura", "routes/struttura.tsx"),
  route("servizi", "routes/servizi.tsx"),
  route("informazioni", "routes/informazioni.tsx"),
  route("contatti", "routes/contatti.tsx"),
] satisfies RouteConfig;
