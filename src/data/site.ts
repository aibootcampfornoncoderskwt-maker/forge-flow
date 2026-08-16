export const site = {
  name: "Modern Global Technologies Company",
  short: "MGTC",
  location: "Fahaheel, Kuwait",
  phoneDisplay: "55570617",
  phoneTel: "+96555570617",
  whatsapp: "96555570617",
  email: "info@mgtckw.com",
  website: "www.mgtckw.com",
  positioning: "Material Handling, Warehouse & Industrial Solutions",
} as const;

export const whatsappMessage =
  "Hello MGTC, I'm contacting you through your website. I would like to enquire about your products/services.";

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
export const telHref = `tel:${site.phoneTel}`;
export const mailHref = `mailto:${site.email}`;
