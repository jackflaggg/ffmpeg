import {IStreamLogger} from "./stream.logger.interface";
import {ChildProcessWithoutNullStreams} from "node:child_process";

export class StreamHandler {
    constructor(private outHandler: IStreamLogger) {}

    processOutput(stream: ChildProcessWithoutNullStreams){
        stream.stdout.on('data', (data: any) => {
            this.logger.log(data)
        })

        stream.stdder.on('data', (data: any) => {
            this.logger.error(data)
        })

        stream.on('close', () => {
            this.logger.end()
        })
    }
}