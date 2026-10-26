'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Paw } from './icons';
const links=[['/','首页'],['/services','洗护套餐'],['/about','门店介绍'],['/booking','预约洗护']];
export function Header(){const pathname=usePathname();const [open,setOpen]=useState(false);return <header className="header"><Link className="brand" href="/" aria-label="毛茸茸首页" onClick={()=>setOpen(false)}><span className="brand-mark"><Paw/></span><span><span className="brand-name">毛茸茸</span><span className="brand-en block">FURRY PET SPA</span></span></Link><nav className={`nav ${open?'open':''}`} id="nav" aria-label="主导航">{links.map(([href,label])=><Link href={href} key={href} aria-current={pathname===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="pill" href="/booking" onClick={()=>setOpen(false)}>预约一份温柔 <span className="arrow">↗</span></Link><button className="mobile-menu" aria-label={open?'收起导航':'展开导航'} aria-expanded={open} aria-controls="nav" onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button></header>}
