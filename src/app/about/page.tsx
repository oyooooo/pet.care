import type { Metadata } from 'next';
import { SectionHeading, AboutSection, Journey, FAQ, BookingCTA } from '@/components/sections';
export const metadata:Metadata={title:'门店介绍',description:'认识毛茸茸宠物洗护生活馆的护理理念、到店流程与常见问题。'};
export default function AboutPage(){return <><SectionHeading eyebrow="OUR LITTLE WORLD" title="一家小店，装下很多温柔。" description="比起匆匆完成一次洗护，我们更想让它喜欢下一次见面。"/><AboutSection/><Journey/><FAQ/><BookingCTA/></>}
