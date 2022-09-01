export function 
transformTitleWithSomeFun(title: string, setTitle: Function, pointer: number = 0) {
    title = title.toLowerCase();
    const firstString = title.slice(0, pointer);
    const upperedLetter = title.charAt(pointer).toUpperCase();
    const secondString = title.slice(pointer + 1, title.length);
    const newString = firstString + upperedLetter + secondString;
    setTitle(newString);
    setTimeout(() => {
        if(pointer < (title.length - 1)) {
            transformTitleWithSomeFun(newString, setTitle, pointer + 1);
        } else {
            transformTitleWithSomeFun(newString, setTitle, 0);
        }
    }, 500);
}