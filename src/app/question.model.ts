import { QuestionItem } from './questionItem.model';
import { QuestionType } from './questiontype';

export class Question {
    id: number;
    type: QuestionType;
    text: string;
    isMandataory: boolean;
    dependsOnId?: number;
    step: number;
    items: QuestionItem[];
}