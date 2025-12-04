import { User } from "./User";
import { IReviewer } from "./IReviewer";
import { Model } from "./Model";

/**
 * Клас Замовника.
 * Зв'язок: Наслідування від User, Реалізація IReviewer.
 */
export class Customer extends User implements IReviewer {
    
    constructor(id: string, name: string) {
        super(id, name);
    }

    public reviewModel(model: Model): void {
        console.log(`[Customer] ${this.name} переглядає концепт моделі.`);
        console.log(`   -> ${model.getDetails()}`);
    }

    public commentConcept(): void {
        console.log(`[Customer] ${this.name} залишив коментар: "Додати більше світла в атріум".`);
    }

    public approveConcept(): void {
        console.log(`[Customer] ${this.name} ЗАТВЕРДИВ концепт.`);
    }
}