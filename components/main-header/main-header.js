'use client'
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import styles from './main-header.module.css'
import { usePathname } from "next/navigation";
import NavLink from "../NavLink/NavLink";

export default function MainHeader() {
    const path = usePathname()

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={logoImg} priority alt="Food plat" />
                Foodies
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href={'/meals'}>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={'/community'}>Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
