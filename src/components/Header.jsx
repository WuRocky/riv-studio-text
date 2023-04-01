import styles from "./Header.module.css";
import React, { useState, useEffect } from "react";

export default function Header() {
	const [scrollingUp, setScrollingUp] = useState(true);
	const [lastScrollPos, setLastScrollPos] = useState(0);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const scrollingUpNow = lastScrollPos > currentScrollPos;
		setScrollingUp(
			currentScrollPos < 10 ||
				(scrollingUpNow && currentScrollPos > 300)
		);
		setLastScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollPos, scrollingUp]);

	return (
		<header
			className={styles.header}
			style={{
				top: scrollingUp ? "0" : "-100px",
				transition: "top 0.3s",
			}}
		>
			<div className={styles.content}>Film Maker</div>
		</header>
	);
}
