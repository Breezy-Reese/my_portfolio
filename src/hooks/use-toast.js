// src/hooks/use-toast.js
import { toast as hotToast } from "react-hot-toast";

export const toast = (options) => {
  if (typeof options === "string") {
    hotToast(options); // toast("Hello world")
  } else {
    hotToast.success(options.title || "Success!", {
      description: options.description,
    });
  }
};
