export type PromptType = 'input' | 'number' | 'password';

export interface ICommandExecute {
    command: string;
    args: string[];
}