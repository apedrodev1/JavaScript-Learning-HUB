class User {
    constructor(fullName, email, birthDate) {
        this.id = this.generateID();
        this.fullName = fullName;
        this.email = email;
        this.birthDate = birthDate;
    }

    generateID() {
        // Gera um ID aleatório com 9 caracteres
        return Math.random().toString(36).substring(2, 11)
    }

    getAge() {
        const today = new Date();
        const birth = new Date(this.birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    isAdult() {
        return this.getAge() >= 18;
    }
}

export default User;
