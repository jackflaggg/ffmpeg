import {PromptService} from "./core/prompt/prompt.service";

export class App {
    async run(){
        const res= await (new PromptService()).input<string>('Число', 'number');
        console.log("Running App: " + res);
    }
}

const app = new App();
app.run();