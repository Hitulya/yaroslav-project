import { TestDoc } from "../../data/TestDocs"
import { TestListItem } from "../test-list-item/TestListItem";

export interface TestListProps {
    docList: TestDoc[];
}

export function TestList({docList}: TestListProps) {
    return (
    <div>
        {docList.map((value, index) => <TestListItem id={index} name={value.name}/>)}
    </div>)
}