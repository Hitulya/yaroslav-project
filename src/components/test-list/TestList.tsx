import { TestDoc } from "../../data/TestDocs"
import { TestListItem } from "../test-list-item/TestListItem";

export interface TestListProps {
    docList: TestDoc[];
    setCurrentDocId: Function;
}

export function TestList({docList, setCurrentDocId}: TestListProps) {
    return (
    <div>
        {docList.map((value, index) => 
            <TestListItem id={index} name={value.name} setCurrentDocId={setCurrentDocId}/>
        )}
    </div>)
}