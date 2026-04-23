import React, { useEffect, useRef } from 'react';

const StarField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration for the three layers of stars
        const layers = [
            { count: 700, size: 1, speed: 0.2, stars: [] },
            { count: 200, size: 2, speed: 0.1, stars: [] },
            { count: 100, size: 3, speed: 0.05, stars: [] }
        ];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Re-initialize stars when resizing to ensure they fill the new space
            initStars();
        };

        const initStars = () => {
            layers.forEach(layer => {
                layer.stars = [];
                for (let i = 0; i < layer.count; i++) {
                    layer.stars.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                    });
                }
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#FFF';

            layers.forEach(layer => {
                layer.stars.forEach(star => {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, layer.size / 2, 0, Math.PI * 2);
                    ctx.fill();

                    // Move star upwards
                    star.y -= layer.speed;

                    // Reset star to bottom if it goes off screen
                    if (star.y < 0) {
                        star.y = canvas.height;
                        star.x = Math.random() * canvas.width;
                    }
                });
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-100 transition-opacity duration-1000"
            style={{ zIndex: 0 }}
        />
    );
};

export default StarField;
