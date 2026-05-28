/**
 * Utility function to conditionally select theme-based classes
 * Reduces repetition of ternary operators throughout components
 *
 * @param darkClass - CSS classes to apply in dark mode
 * @param lightClass - CSS classes to apply in light mode
 * @param isDark - Boolean indicating current theme
 * @returns The appropriate class string based on theme
 *
 * @example
 * const bgColor = themeClass('bg-slate-950', 'bg-white', isDark);
 */
export const themeClass = (
    darkClass: string,
    lightClass: string,
    isDark: boolean
): string => {
    return isDark ? darkClass : lightClass;
};

/**
 * Utility function to select theme-based values of any type
 * Useful for colors, sizes, or other non-string values
 *
 * @param darkValue - Value to use in dark mode
 * @param lightValue - Value to use in light mode
 * @param isDark - Boolean indicating current theme
 * @returns The appropriate value based on theme
 *
 * @example
 * const opacity = themeValue(0.7, 0.5, isDark);
 */
export const themeValue = <T,>(
    darkValue: T,
    lightValue: T,
    isDark: boolean
): T => {
    return isDark ? darkValue : lightValue;
};
