import Layout from '@components/Layout';
import Banner from '@components/Details/Banner';
import Menu from '@components/Details/Menu';
import ContentSet from '@components/Details/ContentSet';
import Footer from '@components/Details/Footer';
import Progress from '@components/Details/Progress';

const DUMMY_DATA = {
	category: ['개발 프로그래밍', '웹 개발'],
	title: '실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발',
	name: '홍길동',
	tag: ['JAVA', 'Spring Boot', 'Back-End', '웹앱', 'Spring'],
	mainimg:
		'https://www.onlineimagetool.com/resources/static/1.0.0/images/bg/split-screen.jpg',
	// 'data:image/png;base64,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',
	profileimg:
		'data:image/jpeg;base64,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',
	numOfLecture: 36,
	Introduction: {
		title: '초급자를 위해 준비한 [백엔드, 웹 개발] 강의입니다.',
		desc: '실무에 가까운 예제로, 스프링 부트와 JPA를 활용해서 웹 애플리케이션을 설계하고 개발합니다. 이 과정을 통해 스프링 부트와 JPA를 실무에서 어떻게 활용해야 하는지 이해할 수 있습니다.',
		details: [
			'스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수 있습니다',
			'스프링 부트와 JPA를 활용하는 최적의 방법을 이해합니다.',
			'도메인 모델을 이해하고 설계할 수 있습니다.',
			'도메인 주도 설계를 이해합니다.',
		],
	},
};
const PROGRESS_DATA = { totalCourse: 36, completeCourse: 14, runTime: 173 };
const DetailsPage = () => (
	<Layout>
		{/* <Progress data={PROGRESS_DATA} /> */}
		<Banner data={DUMMY_DATA} />
		<Menu />
		<ContentSet />
		<Footer />
	</Layout>
);

export default DetailsPage;
