import { useRef, useEffect } from "react";
import styles from "./HorizontalCards.module.css";
import Image from "next/image";
import img11 from "../../images/img11.png";
import img12 from "../../images/img12.png";
import img13 from "../../images/img13.png";
import img14 from "../../images/img14.png";

export default function HorizontalCards() {
	const containerRef = useRef();

	const handleWheel = (event) => {
		if (event.deltaY !== 0) {
			containerRef.current.scrollLeft += event.deltaY;
			event.preventDefault();
		}
	};

	useEffect(() => {
		const containerElement = containerRef.current;
		containerElement.addEventListener("wheel", handleWheel);
		return () => {
			containerElement.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<div className={styles.horizontalCards}>
			<div ref={containerRef} className={styles.inner}>
				<Image
					src={img11}
					width={400}
					height={800}
					className={styles.item}
				/>
				<Image
					src={img12}
					width={400}
					height={800}
					className={styles.item}
				/>
				<Image
					src={img13}
					width={400}
					height={800}
					className={styles.item}
				/>
				<Image
					src={img14}
					width={400}
					height={800}
					className={styles.item}
				/>
				<Image
					src={img14}
					width={400}
					height={800}
					className={styles.item}
				/>
				<Image
					src={img14}
					width={400}
					height={800}
					className={styles.item}
				/>
				<Image
					src={img14}
					width={400}
					height={800}
					className={styles.item}
				/>
			</div>
		</div>
	);
}
