import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "UNIFLUX-D Global Limited", short_name: "UNIFLUX-D", description: "Engineering Intelligence. Empowering Growth.", start_url: "/", display: "browser", background_color: "#ffffff", theme_color: "#061b36" };
}
