import inquirer from 'inquirer'
import {PromptType} from "../../models/common-models";

export class PromptService {
    public async input<T>(message: string, type: PromptType) {
        const { result } = await inquirer.prompt<{ result: T }>([{
            type,
            name: 'result',
            message
        }]);
        return result;
    }

}