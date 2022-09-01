import { TestDoc } from "../../data/TestDocs"

export interface DocTheoryProps {
    docList: TestDoc[];
    currentDocId: number;
}

export function DocTheory({docList, currentDocId}: DocTheoryProps) {
    const currentDoc = docList[currentDocId];
    const theoryStrings = currentDoc.theory.split('\n');

    return (
        <div>
            <h1 className="h1-testlist">
                <text><b>Теория:</b></text>
            </h1>
            <h1 className="h1-testlist">
                {theoryStrings.map((value, index) => {
                    return <text className="answer-text"><small>{value}<br></br></small></text>
                })}
            </h1>
            <h1 className="h1-testlist">
                <a href={currentDoc.file} target="_blank">Файл</a>
            </h1>
        </div>
    )
}