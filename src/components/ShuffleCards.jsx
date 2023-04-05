import styles from "./ShuffleCards.module.css";
import { useState } from "react";
import imge01 from "../../images/img01.png";
import imge02 from "../../images/img02.png";
import Image from "next/image";

export default function ShuffleCards() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		const newClicked = !clicked;
		setClicked(newClicked);
	};
	return (
		<>
			<div className={styles.shuffleCards}>
				<div className={styles.content}>
					<Image
						src={imge01}
						alt="imge01"
						width={713}
						height={474}
						className={`${styles.image01} ${
							clicked
								? styles.animateLeftImg01
								: styles.animateRightImg01
						} `}
						onClick={handleClick}
					/>
					<Image
						src={imge02}
						alt="imge02"
						width={811}
						height={320}
						className={`${styles.image02} ${
							!clicked
								? styles.animateLeftImg02
								: styles.animateRightImg02
						} `}
						onClick={handleClick}
					/>
				</div>
			</div>
			<div className={styles.text}>
				<div className={styles.text_content}>
					We love to visualize stories because we love people and they
					inspire us.
				</div>
			</div>
		</>
	);
}
