import type { MetadataRoute } from "next";
import { CLINIC } from "@/lib";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: CLINIC.name,
    short_name: "Dra. Malu",
    start_url: "/",
    display: "browser",
    background_color: "#fcfcfa",
    theme_color: "#2f6f6a",
    icons: [{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
