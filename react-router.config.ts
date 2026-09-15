import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  prerender: ["/", "/struttura", "/accoglienza", "/informazioni", "/contatti"],
} satisfies Config;
