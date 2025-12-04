import { Model } from "./Model";

/**
 * Інтерфейс для користувачів, які можуть переглядати моделі.
 */
export interface IReviewer {
    reviewModel(model: Model): void;
}