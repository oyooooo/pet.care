import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SectionHeading } from '@/components/sections';
import { BookingForm } from '@/components/booking-form';
export const metadata:Metadata={title:'预约洗护',description:'填写并在本机保存宠物洗护预约意向。本网站为概念演示，未连接真实门店。'};
export default function BookingPage(){return <><SectionHeading eyebrow="A DATE WITH FURRY" title="约一段蓬松时光。" description="先记下小可爱的需要，把一份耐心留给下一次见面。"/><Suspense fallback={<p className="loading" role="status">正在准备预约表单…</p>}><BookingForm/></Suspense></>}
