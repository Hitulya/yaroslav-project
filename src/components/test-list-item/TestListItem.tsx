import '../../index.css';

export interface TestListItemProps {
    id: number;
    name: string;
    setCurrentDocId: Function;
}

export function TestListItem({id, name, setCurrentDocId}: TestListItemProps) {
    function onTestListItemClick() {
        setCurrentDocId(id);
    }

    return (
        <div>
            <h1 className='h1-testlist'><button 
                id={id.toString()} 
                onClick={onTestListItemClick} 
                className="button-5"
            >{name}</button></h1>
        </div>
    )
}