import '../../index.css';

export interface TestListItemProps {
    id: number;
    name: string;
}

export function TestListItem({id, name}: TestListItemProps) {
    function onTestListItemClick() {
        console.log('clicked ' + id);
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