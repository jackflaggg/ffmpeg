export class ffmpegBuilder {
    private inputPath: string;
    private outputPath: string;
    private options: Map<string, string> = new Map();

    constructor (){
        this.options.set('-c:v', 'libx264');
    }

    input(inputPath: string){
        this.inputPath = inputPath;
    }
}