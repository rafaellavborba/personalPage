
import { writable } from 'svelte/store';

export const visibleComponents = writable(new Set());

export function updateVisibility(element, isVisible) {
    visibleComponents.update((set) => {
        if (isVisible) {
            set.add(element);
        } else {
            set.delete(element);
        }
        return set;
    });
}
