import { TestDoc } from "../../data/TestDocs";

export interface DocAnswerProps {
    docList: TestDoc[];
    currentDocId: number;
}

export function DocAnswer({docList, currentDocId}: DocAnswerProps) {
    return (
        <div>
            <h1 className="h1-testlist">
                <text><b>Ответ:</b></text>
            </h1>
            <h1 className="h1-testlist">
                <text className="answer-text"><small>{docList[currentDocId].answer}</small></text>
            </h1>
        </div>
    )
}