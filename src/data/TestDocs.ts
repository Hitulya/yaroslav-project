import { TestDoc } from "../components/test-doc/TestDocs";

export interface TestDoc {
    name: string;
    theory: string;
    answer: string;
}

export const testDocs: TestDoc[] = [
    {
        name: '9.1 иксель))',
        theory: 'тиория',
        answer: 'ответ 1'
    },
    {
        name: '9.2 иксель 2))',
        theory: 'тиория2',
        answer: 'ответ 2'
    },
    {
        name: '9.3 иксель 2))',
        theory: 'тиория2',
        answer: 'ответ 3'
    },
    {
        name: '9.4 иксель 2))',
        theory: 'тиория2',
        answer: 'ответ 4'
    }
];