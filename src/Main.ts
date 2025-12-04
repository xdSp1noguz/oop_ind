import { Architect } from "./Architect";
import { Customer } from "./Customer";
import { Engineer } from "./Engineer";
import { Model } from "./Model";

/**
 * Головний клас для демонстрації роботи системи.
 */
class Main {
    public static run(): void {
        console.log("=== ЗАПУСК СИМУЛЯЦІЇ БУДІВЕЛЬНОГО ПРОЄКТУ ===\n");

        // 1. Створення дійових осіб
        const architect = new Architect("ARCH-01", "Джон Райт");
        const customer = new Customer("CUST-01", "ТОВ 'Інвест Груп'");
        const engineer = new Engineer("ENG-01", "Роберт Сміт");

        // 2. Вхід в систему
        architect.login();
        customer.login();
        engineer.login();
        console.log("");

        // 3. Архітектор створює та публікує модель
        const buildingModel = new Model("MODEL-X", 1);
        architect.setCurrentModel(buildingModel);
        architect.publishModel();
        console.log("");

        // 4. Замовник переглядає та коментує
        customer.reviewModel(buildingModel);
        customer.commentConcept();
        console.log("");

        // 5. Інженер перевіряє
        engineer.reviewModel(buildingModel);
        engineer.checkConflicts(buildingModel);
        engineer.sendRequest();
        console.log("");

        // 6. Архітектор оновлює модель
        architect.releaseUpdate();
        console.log("");

        // 7. Замовник затверджує
        customer.approveConcept();

        console.log("\n=== СИМУЛЯЦІЯ ЗАВЕРШЕНА ===");
    }
}

// Запуск програми
Main.run();