import {IStreamLogger} from "./stream.logger.interface";
import {ChildProcess, ChildProcessWithoutNullStreams} from "node:child_process";

export class StreamHandler {
    constructor(private outHandler: IStreamLogger) {}

    processOutput(stream: ChildProcessWithoutNullStreams){}
}