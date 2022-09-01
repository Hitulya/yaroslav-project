import { useState } from "react";
import { FunnyTitle } from "./components/funny-title/FunnyTitle";
import { TestList } from "./components/test-list/TestList";
import { testDocs } from './data/TestDocs';

export interface AppProps {
	funnyTitle: string;
}

function App() {
	const [title, setTitle] = useState('ярослав');
	const [currentDocId, setCurrentDocId] = useState(0);

  	return (
		<div>
			<FunnyTitle title={title} setTitle={setTitle}/>
			<TestList docList={testDocs}/>
		</div>
  	);
}

export default App;
