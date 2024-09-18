import {IStreamLogger} from "./stream.logger.interface";
import {ChildProcessWithoutNullStreams} from "node:child_process";

export class StreamHandler {
    constructor(private outHandler: IStreamLogger) {}

    processOutput(stream: ChildProcessWithoutNullStreams){
        stream.stdout.on('data', (data: Buffer) => {
            this.outHandler.log(data);
        });

        stream.stderr.on('data', (data: Buffer) => {
            this.outHandler.error(data);
        });

        stream.on('close', () => {
            this.outHandler.end();
        });
    }
}