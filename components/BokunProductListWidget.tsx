"use client";

import { useEffect } from "react";

const BOKUN_CHANNEL_UUID = "28090354-999b-4488-adcc-30dadec02b74";
const BOKUN_PRODUCT_LIST_SRC = `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL_UUID}/product-list/105167`;
const BOKUN_LOADER_SRC = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${BOKUN_CHANNEL_UUID}`;

export function BokunProductListWidget() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-bokun-loader="${BOKUN_CHANNEL_UUID}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = BOKUN_LOADER_SRC;
    script.async = true;
    script.dataset.bokunLoader = BOKUN_CHANNEL_UUID;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bokun-widget-shell">
      <div className="bokunWidget" data-src={BOKUN_PRODUCT_LIST_SRC} />
      <noscript>Please enable javascript in your browser to book</noscript>
    </div>
  );
}
