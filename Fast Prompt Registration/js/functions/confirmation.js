export function showConfirmation(user) {
    alert(
        `Thank you for registering, ${user.fullName}, You're in!!\n` +
        `🎉 This is your lucky number: ${user.id}\n\n` +
        `📧 Stay tuned to your email (${user.email}) for draw updates.\n` +
        `Good luck! 🍀`
    );
}