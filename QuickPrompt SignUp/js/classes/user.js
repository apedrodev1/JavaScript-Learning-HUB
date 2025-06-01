/**
 * Represents a user participating in the prize draw.
 *
 * @module user
 */
class User {
    /**
     * Creates a new user.
     *
     * @param {string} fullName - User's full name.
     * @param {string} email - User's email.
     * @param {string} birthDate - User's birth date (ISO format).
     */
    constructor(fullName, email, birthDate) {
        this.id = this.generateID();
        this.fullName = fullName;
        this.email = email;
        this.birthDate = birthDate;
    }

    /**
     * Generates a random 9-character ID.
     *
     * @returns {string} User ID.
     */
    generateID() {
        return Math.random().toString(36).substring(2, 11);
    }

    /**
     * Calculates the user's age.
     *
     * @returns {number} Age in years.
     */
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

    /**
     * Checks if the user is 18 or older.
     *
     * @returns {boolean} True if adult, false otherwise.
     */
    isAdult() {
        return this.getAge() >= 18;
    }
}

export default User;
