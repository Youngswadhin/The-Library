import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import "./Css/Counter.scss"

const Counter = ({ target, title, duration }) => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	return (
		<div className='Count drop' ref={ref}>
			<CountUp
				start={0}
				end={inView ? target : 0}
				duration={duration}
				separator='.'
				useEasing={true}>
				{({ countUpRef }) => (
					<span ref={countUpRef} />
				)}
			</CountUp>
			<p>{title}</p>
		</div>
	);
};

export default Counter;