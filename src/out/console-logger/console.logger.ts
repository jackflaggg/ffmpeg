import {IStreamLogger} from "../../core/handlers/stream.logger.interface";

export class ConsoleLogger {
    private static instance: ConsoleLogger;

    private constructor() {}

    private static createSingleton(){
        if(!this.instance){
            this.instance = new ConsoleLogger();
        }
        return this.instance;
    }

    public static getInstance(){
        return this.createSingleton();
    }
}