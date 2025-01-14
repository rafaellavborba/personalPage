// src/actions/observeVisibility.js
import { updateVisibility } from '../stores/visibilityStore';

export function observeVisibility(node, { id } = {}) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            updateVisibility(id || node, entry.isIntersecting);
        },
        { threshold: 0.4 }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
