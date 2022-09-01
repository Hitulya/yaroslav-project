import { useState } from "react";
import { DocAnswer } from "./components/answer-list/DocAnswer";
import { FunnyTitle } from "./components/funny-title/FunnyTitle";
import { DocTheory } from "./components/test-doc/DocTheory";
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
			<TestList docList={testDocs} setCurrentDocId={setCurrentDocId}/>
			<DocTheory docList={testDocs} currentDocId={currentDocId}/>
			<DocAnswer docList={testDocs} currentDocId={currentDocId}/>
		</div>
  	);
}

export default App;
