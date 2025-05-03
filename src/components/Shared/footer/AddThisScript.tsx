"use client";

import { useEffect } from "react";

// רכיב AddThisScript להוספת הסקריפט של AddThis
export function AddThisScript() {
  useEffect(() => {
    // טעינת סקריפט AddThis באופן דינמי
    const script = document.createElement("script");
    script.src =
      "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-YOUR-ADDTHIS-ID";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // ניקוי כשהרכיב מסולק
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
