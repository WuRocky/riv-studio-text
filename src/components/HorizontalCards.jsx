import { useRef, useEffect } from "react";
import styles from "./HorizontalCards.module.css";
import Image from "next/image";
import img11 from "../../images/img11.png";
import img12 from "../../images/img12.png";
import img13 from "../../images/img13.png";
import img14 from "../../images/img14.png";

export default function HorizontalScroll() {
	const spaceHolderRef = useRef();
	const stickyRef = useRef();
	const horizontalRef = useRef();

	const calcDynamicHeight = (ref) => {
		const vw = window.innerWidth;
		const vh = window.innerHeight;
		const objectWidth = ref.scrollWidth;
		return objectWidth - vw + vh + 150;
	};

	useEffect(() => {
		const spaceHolderElement = spaceHolderRef.current;
		const stickyElement = stickyRef.current;
		const horizontalElement = horizontalRef.current;

		const handleScroll = () => {
			horizontalElement.style.transform = `translateX(-${stickyElement.offsetTop}px)`;
		};

		const handleResize = () => {
			spaceHolderElement.style.height = `${calcDynamicHeight(
				horizontalElement
			)}px`;
		};

		spaceHolderElement.style.height = `${calcDynamicHeight(
			horizontalElement
		)}px`;
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<section className={styles.container}>
			<div ref={spaceHolderRef} className={styles.spaceHolder}>
				<div ref={stickyRef} className={styles.sticky}>
					<div ref={horizontalRef} className={styles.horizontal}>
						<section role="feed" className={styles.cards}>
							<Image
								src={img11}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
							<Image
								src={img12}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
							<Image
								src={img13}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
							<Image
								src={img14}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
							<Image
								src={img14}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
							<Image
								src={img14}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
							<Image
								src={img14}
								width={400}
								height={800}
								className={styles.sampleCard}
							/>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
}
