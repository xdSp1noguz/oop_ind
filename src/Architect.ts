import { User } from "./User";
import { Model } from "./Model";

/**
 * Клас Архітектора.
 * Зв'язок: Наслідування від User, Агрегація з Model.
 */
export class Architect extends User {
    private currentModel: Model | null = null;

    constructor(id: string, name: string) {
        super(id, name);
    }

    public setCurrentModel(model: Model): void {
        this.currentModel = model;
    }

    public publishModel(): void {
        if (this.currentModel) {
            console.log(`[Architect] ${this.name} опублікував модель.`);
            this.currentModel.view();
        } else {
            console.log(`[Architect] ${this.name} ще не має готової моделі.`);
        }
    }

    /**
     * Фінальний метод (readonly property в TS імітує final метод, який не можна перевизначити).
     */
    public readonly releaseUpdate = (): void => {
        console.log(`[Architect] ${this.name} випускає оновлену версію v2.0.`);
    }
}