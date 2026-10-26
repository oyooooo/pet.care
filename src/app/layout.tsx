import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/sections';
import './globals.css';
export const metadata: Metadata = {title:{default:'毛茸茸 FURRY — 把小可爱，交给温柔的人',template:'%s | 毛茸茸 FURRY'},description:'毛茸茸宠物洗护生活馆概念网站。温柔洗护、造型修剪，给小可爱一段轻松的洗澡时光。'};
export const viewport: Viewport = {themeColor:'#f7f5ed'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">跳至正文</a><div className="wrap"><Header/><main id="main">{children}</main><Footer/></div></body></html>}
