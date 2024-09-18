export type PromptType = 'input' | 'number' | 'password';

export interface ICommandExecute {
    command: string;
    args: string[];
}

export interface IFfmpegInput {
    width: number;
    height: number;
    path: string;
    name: string;
}

export interface ICommandExecFfmpeg extends ICommandExecute {
    output: string;
}