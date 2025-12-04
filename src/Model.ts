/**
 * Клас, що представляє 3D-модель.
 */
export class Model {
    private id: string;
    private version: number;

    constructor(id: string, version: number) {
        this.id = id;
        this.version = version;
    }

    public getDetails(): string {
        return `Model [ID: ${this.id}, Version: ${this.version}]`;
    }

    public view(): void {
        console.log(`[System] Відображення даних 3D-моделі: ${this.getDetails()}`);
    }
}