import { useRef, useEffect } from "react";
import styles from "./Video.module.css";
export default function Video() {
	const videoRef = useRef();

	useEffect(() => {
		const observerCallback = (entries) => {
			const video = videoRef.current;
			const entry = entries[0];
			const visibleRatio = entry.intersectionRatio;

			if (visibleRatio >= 0.3) {
				video.play();
			} else {
				video.pause();
			}

			if (entry.isIntersecting === false) {
				video.currentTime = 0;
			}
		};

		const observerOptions = {
			threshold: [0, 0.3],
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);
		observer.observe(videoRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<div>
				<video
					ref={videoRef}
					width="100%"
					controls
					className={styles.video}
				>
					<source src="/video/sample.mp4" type="video/mp4" />
				</video>
				<div className={styles.text}>
					<div className={styles.text_content}>
						We are a creative agency, film production, branded &
						original content creators.
					</div>
				</div>
			</div>
		</>
	);
}
