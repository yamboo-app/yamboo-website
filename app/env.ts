const defaultBookingUrl =
  "https://calendly.com/stupasolutions25/30min?hide_event_type_details=1&hide_gdpr_banner=1";

function getPublicEnv(value: string | undefined, fallback: string) {
  const trimmedValue = value?.trim();

  return trimmedValue ? trimmedValue : fallback;
}

export const env = {
  siteUrl: getPublicEnv(process.env.NEXT_PUBLIC_SITE_URL, "https://www.yamboo.com.au"),
  bookingUrl: getPublicEnv(process.env.NEXT_PUBLIC_BOOKING_URL, defaultBookingUrl),
  contactEmail: getPublicEnv(
    process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    "stupasolutions25@gmail.com",
  ),
} as const;
