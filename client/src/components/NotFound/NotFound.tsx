import React from 'react';
import { NotFoundContainer } from './NotFound.elements';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
	return (
		<NotFoundContainer>
			<div className='wrapper'>
				<h1>Error 404</h1>
				<p>The URL you are tring to access does not exists.</p>
			</div>
		</NotFoundContainer>
	);
};

export default NotFound;
