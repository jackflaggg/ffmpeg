import {IStreamLogger} from "../handlers/stream.logger.interface";

export abstract class CommandExecutor {
    constructor(private logger: IStreamLogger){};

    public async execute(){
        this.prompt();
        this.build();
        this.spawn();
        this.processStream();
    };

    private prompt(): void {
        console.log('Boiling water...');
    }

    private build(): void {
        console.log('Pouring into cup...');
    }

    protected abstract spawn(): void;

    protected processStream(): void {
        console.log('Adding condiments...');
    }
}