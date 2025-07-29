// Hello World MVP - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello World MVP loaded successfully!');
    
    // Add some interactive features
    const helloWorld = document.querySelector('.hello-world h2');
    
    if (helloWorld) {
        helloWorld.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover effect
        helloWorld.style.cursor = 'pointer';
        helloWorld.style.transition = 'transform 0.2s ease';
    }
    
    // Log performance metrics
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    });
});