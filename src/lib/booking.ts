export const buildWhatsAppBookingUrl = (data: {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  roomType?: string;
}) => {
  const message = `Hello Bisyl Suites,

I would like to make a reservation.

Room Type: ${data.roomType ?? "Not selected"}
Check-in: ${data.checkIn ?? "Not selected"}
Check-out: ${data.checkOut ?? "Not selected"}
Guests: ${data.guests ?? "Not selected"}

Please confirm availability.`;

  return `https://wa.me/2348150542873?text=${encodeURIComponent(message)}`;
};