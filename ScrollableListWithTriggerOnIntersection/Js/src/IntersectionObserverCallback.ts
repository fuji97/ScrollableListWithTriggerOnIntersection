import {IntersectionObserverEntry} from "./IntersectionObserverEntry";

export interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}