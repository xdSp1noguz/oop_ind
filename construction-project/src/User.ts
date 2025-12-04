/**
 * Абстрактний клас користувача системи.
 * Використовується для інкапсуляції загальних атрибутів.
 */
export abstract class User {
    protected id: string;
    protected name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public login(): void {
        console.log(`[Auth] Користувач ${this.name} (ID: ${this.id}) увійшов у систему.`);
    }
}