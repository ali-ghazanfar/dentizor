export const whatsappNumber = "923147155433";
export const whatsappDisplayNumber = "+92 314 7155433";

export const getWhatsAppUrl = (message = "Hello Dentizor, I would like to learn more about your dental practice management software.") =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
