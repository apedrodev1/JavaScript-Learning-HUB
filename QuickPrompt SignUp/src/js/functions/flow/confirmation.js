/**
 * Displays a confirmation message to the registered user.
 *
 * @module confirmation
 */

/**
 * Shows final confirmation alert to the user.
 *
 * @param {Object} user - The user object containing fullName, email, and id.
 */
export function showConfirmation(user) {
    alert(
        `Thank you for registering, ${user.fullName}, You're in!!\n` +
        `🎉 This is your lucky number: ${user.id}\n\n` +
        `📧 Stay tuned to your email (${user.email}) for draw updates.\n` +
        `Good luck! 🍀`
    );
}
