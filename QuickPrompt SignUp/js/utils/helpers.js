/**
 * Helper functions used throughout the application.
 *
 * @module helpers
 */

/**
 * Capitalizes each word in a name string.
 *
 * @param {string} name - Name to capitalize.
 * @returns {string} Capitalized name.
 */
export function capitalize(name) {
    return name
        .toLowerCase()
        .split(' ')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}
