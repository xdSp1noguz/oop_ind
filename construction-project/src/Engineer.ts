import { User } from "./User";
import { IReviewer } from "./IReviewer";
import { Model } from "./Model";

/**
 * Клас Інженера.
 * Зв'язок: Наслідування від User, Реалізація IReviewer.
 */
export class Engineer extends User implements IReviewer {

    constructor(id: string, name: string) {
        super(id, name);
    }

    public reviewModel(model: Model): void {
        console.log(`[Engineer] ${this.name} аналізує технічні параметри.`);
    }

    // Зв'язок: Залежність (приймає Model як параметр)
    public checkConflicts(model: Model): void {
        console.log(`[Engineer] ${this.name} перевіряє конфлікти в ${model.getDetails()}...`);
        console.log(`[Engineer] Знайдено перетин вентиляції з балкою!`);
    }

    public sendRequest(): void {
        console.log(`[Engineer] ${this.name} надсилає запит на уточнення архітектору.`);
    }
}