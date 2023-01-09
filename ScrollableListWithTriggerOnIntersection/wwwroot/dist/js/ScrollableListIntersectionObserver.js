export function initializeIntersectionObserver(divElement, component) {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // The element is now visible, so invoke the component's OnIntersectionHandler method
                component.invokeMethodAsync("OnIntersectionHandler", true);
            }
            else {
                // The element is no longer visible, so invoke the component's OnIntersectionHandler method
                component.invokeMethodAsync("OnIntersectionHandler", false);
            }
        });
    }, {
        root: document.querySelector("#scrollable-list"),
        rootMargin: "0px",
        threshold: 0.5
    });
    // Start observing the div element
    observer.observe(divElement);
}
//# sourceMappingURL=ScrollableListIntersectionObserver.js.map