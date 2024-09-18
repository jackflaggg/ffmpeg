import {IStreamLogger} from "../../core/handlers/stream.logger.interface";

export class ConsoleLogger implements IStreamLogger {
    private static logger: ConsoleLogger;

    private constructor() {}

    private static createSingleton(){
        if(!this.logger){
            this.logger = new ConsoleLogger();
        }
        return this.logger;
    }

    public static getInstance(){
        return this.createSingleton();
    }
    log(...args: any[]): void{
        console.log(...args);
    };
    end(): void{};
    error(...args: any[]): void{
        console.error(...args);
    };
}