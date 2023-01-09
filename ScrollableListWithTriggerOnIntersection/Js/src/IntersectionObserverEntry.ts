export interface IntersectionObserverEntry {
    time: number;
    rootBounds: ClientRect | DOMRectReadOnly;
    boundingClientRect: ClientRect | DOMRectReadOnly;
    intersectionRect: ClientRect | DOMRectReadOnly;
    intersectionRatio: number;
    target: Element;
    isIntersecting: boolean;
}