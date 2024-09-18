import {IStreamLogger} from "../handlers/stream.logger.interface";
import {ChildProcessWithoutNullStreams} from "node:child_process";
import {ICommandExecute} from "../../models/common-models";

export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger){};

    public async execute(){
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    };


    protected abstract prompt(): Promise<Input>;
    protected abstract build(input: Input): ICommandExecute;
    protected abstract spawn(command: ICommandExecute): ChildProcessWithoutNullStreams;
    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}