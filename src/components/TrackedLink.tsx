"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackEvent, type AnalyticsParams } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventLabel?: string;
  eventCategory?: string;
  eventParams?: AnalyticsParams;
};

export default function TrackedLink({
  eventName,
  eventLabel,
  eventCategory,
  eventParams,
  onClick,
  href,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      link_url: typeof href === "string" ? href : undefined,
      ...eventParams,
    });

    onClick?.(event);
  };

  return <a href={href} onClick={handleClick} {...rest} />;
}
