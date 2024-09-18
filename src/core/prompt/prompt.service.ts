import inquirer from 'inquirer'
import {PromptType} from "../../models/common-models";

export class PromptService {
    public async input(msg: string, type: PromptType) {
        const data = await inquirer.prompt([{
            type,
            name: 'result',
            message: 'What is the project name?',
        }])
    }

}