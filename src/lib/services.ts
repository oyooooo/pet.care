export type PetType = 'dog' | 'cat';
export type ServiceId = 'clean' | 'style' | 'care';
export const serviceIds: ServiceId[] = ['clean', 'style', 'care'];
export const timeSlots = ['10:00 – 12:00', '12:00 – 14:00', '14:00 – 16:00', '16:00 – 18:00'];
export const services = {
  clean: { en: 'Fresh & fluffy', icon: 'bath', dog: { title:'香香基础洗护', price:89, description:'给日常的小冒险按下清洁键。温水轻柔洗净，吹出一身可以拥抱的蓬松。', items:['基础检查','温和洗浴','吹干梳理','趾甲护理'] }, cat: { title:'香香基础洗护', price:129, description:'给爱干净的小猫温柔加分。先适应环境，再以舒适的节奏完成清洁与吹干。', items:['基础检查','温和洗浴','吹干梳理','趾甲护理'] } },
  style: { en: 'A little makeover', icon:'scissors', dog: { title:'精致造型洗护', price:169, description:'保留独一份的小个性，让可爱再多一点。先沟通喜好，再修剪合适的造型。', items:['基础洗护','造型沟通','全身修剪','细节整理'] }, cat: { title:'精细梳理洗护', price:189, description:'照顾爱惜毛发的小家伙。细致梳理浮毛与局部整理，保留猫咪自然的可爱。', items:['基础洗护','分区梳毛','局部整理','细节整理'] } },
  care: { en: 'Extra tender care', icon:'heart', dog: { title:'柔润深度养护', price:229, description:'为毛发多花一点心思。细致梳开浮毛与轻微打结，让每一次抚摸都柔软。', items:['基础洗护','浮毛梳理','毛发滋养','足垫护理'] }, cat: { title:'柔润深度养护', price:259, description:'为长毛与换毛期多花一点耐心。分区梳理、温和滋养，让毛发轻盈顺滑。', items:['基础洗护','浮毛梳理','毛发滋养','足垫护理'] } }
} as const;
export function isPet(value: unknown): value is PetType { return value === 'dog' || value === 'cat'; }
export function isService(value: unknown): value is ServiceId { return serviceIds.includes(value as ServiceId); }
