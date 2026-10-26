import { isPet, isService, services, serviceIds, timeSlots, type PetType, type ServiceId } from './services.ts';
export const STORAGE_KEY = 'furry-booking-v1';
export type Booking = { petName: string; petType: PetType; service: ServiceId; date: string; time: string };
export function localDate(now = new Date()) { return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }
export function validDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value+'T12:00:00');
  return !Number.isNaN(date.getTime()) && localDate(date) === value;
}
export function resolveBooking(raw: unknown, petParam: unknown, serviceParam: unknown, today: string): Booking {
  const draft = raw && typeof raw === 'object' ? raw as Record<string,unknown> : {};
  const petType = isPet(petParam) ? petParam : isPet(draft.petType) ? draft.petType : 'dog';
  const oldService = isService(draft.service) ? draft.service : serviceIds.find(id => services[id].dog.title === draft.service || services[id].cat.title === draft.service);
  return {petName:typeof draft.petName==='string'?draft.petName.slice(0,30):'', petType, service:isService(serviceParam)?serviceParam:oldService??'clean', date:validDate(draft.date)&&draft.date>=today?draft.date:today, time:timeSlots.includes(draft.time as string)?draft.time as string:timeSlots[0]};
}
export function validateBooking(booking: Booking, today: string) {
  if (!booking.petName.trim()) return '请填写小可爱的名字。';
  if (!validDate(booking.date) || booking.date < today) return '请选择今天或以后的有效日期。';
  return '';
}
export function legacyDraft(booking: Booking) { return {...booking, petName:booking.petName.trim(), service:services[booking.service][booking.petType].title}; }
export function persistBooking(booking: Booking, write: (key:string,value:string)=>void) {
  try { write(STORAGE_KEY,JSON.stringify(legacyDraft(booking))); return true; } catch { return false; }
}
