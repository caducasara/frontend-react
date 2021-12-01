import React from 'react'
import './App.scss'

import ContentTable from './components/ContentTable'
import { PostsProvider } from './hooks/usePosts'
const App: React.FC = () => {

	return (
		<PostsProvider>
			<div className='App'>
				<h1>Get List and Pagination!</h1>
			</div>
			<ContentTable titleTable="Latest Posts" title="Title" content="Content" />
		</PostsProvider>
	)
}

export default App
