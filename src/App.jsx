import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className='container mx-auto flex justify-center items-center'>
			<h1 className='text-2xl font-bold'>Hello World</h1>
		</div>
	)
}

export default App
