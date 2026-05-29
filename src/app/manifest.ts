import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kapil Badgujjar — Software Engineer",
    short_name: "Kapil",
    description:
      "Portfolio of Kapil Badgujjar — Software Engineer specializing in cloud-native architecture and full-stack development.",
    start_url: "/",
    display: "standalone",
    background_color: "#050507",
    theme_color: "#050507",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
