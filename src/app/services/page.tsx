import type { Metadata } from 'next';
import { SectionHeading, BookingCTA } from '@/components/sections';
import { PetTabs } from '@/components/pet-tabs';
export const metadata:Metadata={title:'洗护套餐',description:'浏览猫咪与狗狗的基础洗护、造型梳理及深度养护示例套餐。'};
export default function ServicesPage(){return <><SectionHeading eyebrow="THE GROOMING MENU" title="把蓬松与快乐，一起打包。" description="从日常清洁到细致养护，为每一种小可爱挑选合适的照顾。"/><section className="menu-section" aria-label="洗护套餐"><PetTabs/></section><div className="care-note"><span className="care-note-icon" aria-hidden="true">♡</span><div><h2>先了解它，再决定如何照顾。</h2><p>实际项目、费用与护理时长需在到店评估后确认。若小可爱紧张或不适，我们会先停一停，和主人一起决定。</p></div></div><BookingCTA/></>}
