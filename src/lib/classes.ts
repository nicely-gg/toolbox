import type { ClassValue } from 'clsx'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Takes a list of classes, uses {@link clsx} to determine whether they should be rendered,
 * then uses {@link twMerge} to prioritze tailwind classes appropriately
 * @param classes {@link clsx} compatible class values
 * @returns filtered class list
 */
export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(...classes))
}
