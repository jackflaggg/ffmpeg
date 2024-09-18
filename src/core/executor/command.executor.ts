import {IStreamLogger} from "../handlers/stream.logger.interface";

export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger){};

    public async execute(){
        this.prompt();
        this.build();
        this.spawn();
        this.processStream();
    };


    protected abstract prompt(): Promise<Input>;
    protected abstract build(): Promise<Input>;
    protected abstract spawn(): Promise<Input>;
    protected abstract processStream(): Promise<Input>;
}