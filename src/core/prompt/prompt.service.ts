import inquirer from 'inquirer'

export class PromptService {
    public async input(msg: string, ): Promise<any> {
        const data = inquirer.prompt([{
            type: '',
            name: 'result',
            message: 'What is the project name?',
        }])
    }

}