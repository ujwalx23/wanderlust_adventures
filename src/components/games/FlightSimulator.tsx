
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Pause, Play, RotateCcw } from 'lucide-react';

const FlightSimulator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [paused, setPaused] = useState(false);
  
  // Game state
  const gameState = useRef({
    plane: { x: 50, y: 50, width: 20, height: 15 },
    clouds: [] as { x: number, y: number, width: number, height: number }[],
    speed: 2,
    cloudSpawnTimer: 0,
    animationFrameId: 0,
    score: 0
  });
  
  const startGame = () => {
    if (gameActive) return;
    
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setPaused(false);
    
    gameState.current = {
      plane: { x: 50, y: 50, width: 20, height: 15 },
      clouds: [],
      speed: 2,
      cloudSpawnTimer: 0,
      animationFrameId: 0,
      score: 0
    };
    
    gameLoop();
  };
  
  const resetGame = () => {
    if (gameState.current.animationFrameId) {
      cancelAnimationFrame(gameState.current.animationFrameId);
    }
    setGameActive(false);
    setGameOver(false);
    setScore(0);
  };
  
  const togglePause = () => {
    if (gameOver) return;
    
    setPaused(prev => !prev);
    if (paused) {
      gameLoop();
    }
  };
  
  const gameLoop = () => {
    if (!canvasRef.current || gameOver || paused) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw sky
    ctx.fillStyle = '#b3e0ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw some background
    drawMountains(ctx, canvas);
    
    // Update plane position based on keys
    handleKeyControls();
    
    // Update clouds
    updateClouds();
    
    // Draw plane
    drawPlane(ctx, gameState.current.plane);
    
    // Draw clouds
    drawClouds(ctx);
    
    // Draw score
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.fillText(`Score: ${gameState.current.score}`, 10, 20);
    
    // Check collisions
    if (checkCollisions()) {
      setGameOver(true);
      setScore(gameState.current.score);
      return;
    }
    
    // Increase score
    gameState.current.score += 1;
    setScore(gameState.current.score);
    
    // Increase difficulty over time
    if (gameState.current.score % 500 === 0) {
      gameState.current.speed += 0.2;
    }
    
    // Continue the game loop
    gameState.current.animationFrameId = requestAnimationFrame(gameLoop);
  };
  
  const drawMountains = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = '#70a288';
    
    // Draw mountains in the background
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(0, canvas.height - 60);
    ctx.lineTo(canvas.width * 0.2, canvas.height - 120);
    ctx.lineTo(canvas.width * 0.4, canvas.height - 40);
    ctx.lineTo(canvas.width * 0.6, canvas.height - 90);
    ctx.lineTo(canvas.width * 0.8, canvas.height - 30);
    ctx.lineTo(canvas.width, canvas.height - 70);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fill();
  };
  
  const drawPlane = (ctx: CanvasRenderingContext2D, plane: { x: number, y: number, width: number, height: number }) => {
    ctx.fillStyle = '#f8f8f8';
    
    // Draw plane body
    ctx.beginPath();
    ctx.moveTo(plane.x, plane.y);
    ctx.lineTo(plane.x + plane.width, plane.y + plane.height / 2);
    ctx.lineTo(plane.x, plane.y + plane.height);
    ctx.closePath();
    ctx.fill();
    
    // Draw wing
    ctx.fillStyle = '#e0e0e0';
    ctx.beginPath();
    ctx.moveTo(plane.x + plane.width * 0.3, plane.y + plane.height * 0.3);
    ctx.lineTo(plane.x + plane.width * 0.5, plane.y - plane.height * 0.5);
    ctx.lineTo(plane.x + plane.width * 0.6, plane.y);
    ctx.closePath();
    ctx.fill();
  };
  
  const drawClouds = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    
    gameState.current.clouds.forEach(cloud => {
      // Draw a simple cloud shape
      ctx.beginPath();
      ctx.arc(cloud.x, cloud.y, cloud.width / 2, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.width * 0.4, cloud.y - cloud.height * 0.2, cloud.width * 0.6, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.width * 0.4, cloud.y + cloud.height * 0.2, cloud.width * 0.6, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.width * 0.8, cloud.y, cloud.width / 2, 0, Math.PI * 2);
      ctx.fill();
    });
  };
  
  const handleKeyControls = () => {
    // These would normally be handled by key event listeners
    // For this demo, we'll use keys in a simple way
    const keysPressed = useRef<Record<string, boolean>>({});
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };
    
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, []);
    
    // Apply key movements
    if (keysPressed.current['ArrowUp'] || keysPressed.current['w']) {
      if (gameState.current.plane.y > 10) {
        gameState.current.plane.y -= 3;
      }
    }
    if (keysPressed.current['ArrowDown'] || keysPressed.current['s']) {
      if (gameState.current.plane.y < canvasRef.current!.height - 20) {
        gameState.current.plane.y += 3;
      }
    }
    if (keysPressed.current['ArrowLeft'] || keysPressed.current['a']) {
      if (gameState.current.plane.x > 10) {
        gameState.current.plane.x -= 3;
      }
    }
    if (keysPressed.current['ArrowRight'] || keysPressed.current['d']) {
      if (gameState.current.plane.x < canvasRef.current!.width - 30) {
        gameState.current.plane.x += 3;
      }
    }
  };
  
  const updateClouds = () => {
    if (!canvasRef.current) return;
    
    // Spawn new clouds
    gameState.current.cloudSpawnTimer += 1;
    if (gameState.current.cloudSpawnTimer > 60) { // Every 60 frames = ~1 second
      gameState.current.cloudSpawnTimer = 0;
      
      const canvas = canvasRef.current;
      const cloudWidth = 30 + Math.random() * 20;
      
      gameState.current.clouds.push({
        x: canvas.width,
        y: 30 + Math.random() * (canvas.height - 60),
        width: cloudWidth,
        height: cloudWidth / 2
      });
    }
    
    // Move clouds
    gameState.current.clouds.forEach(cloud => {
      cloud.x -= gameState.current.speed;
    });
    
    // Remove off-screen clouds
    gameState.current.clouds = gameState.current.clouds.filter(cloud => cloud.x + cloud.width > 0);
  };
  
  const checkCollisions = () => {
    const plane = gameState.current.plane;
    
    // Check for collisions with clouds
    for (const cloud of gameState.current.clouds) {
      // Simple rectangular collision detection
      if (
        plane.x < cloud.x + cloud.width &&
        plane.x + plane.width > cloud.x &&
        plane.y < cloud.y + cloud.height &&
        plane.y + plane.height > cloud.y - cloud.height
      ) {
        return true; // Collision detected
      }
    }
    
    // Check for collisions with top or bottom of screen
    if (plane.y < 0 || plane.y + plane.height > canvasRef.current!.height) {
      return true;
    }
    
    return false;
  };
  
  // Handle touch controls for mobile
  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      if (!canvasRef.current || !gameActive || gameOver || paused) return;
      
      const touch = e.touches[0];
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      
      // Move plane toward touch position
      if (touchX < gameState.current.plane.x) {
        gameState.current.plane.x -= 3;
      } else {
        gameState.current.plane.x += 3;
      }
      
      if (touchY < gameState.current.plane.y) {
        gameState.current.plane.y -= 3;
      } else {
        gameState.current.plane.y += 3;
      }
    };
    
    canvasRef.current?.addEventListener('touchmove', handleTouch);
    
    return () => {
      canvasRef.current?.removeEventListener('touchmove', handleTouch);
    };
  }, [gameActive, gameOver, paused]);
  
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Paper Airplane Simulator
          </h3>
          <p className="text-gray-600">
            Navigate through the clouds using arrow keys or touch controls
          </p>
        </div>
        
        <div className="relative">
          <canvas 
            ref={canvasRef} 
            width={600} 
            height={400}
            className="mx-auto border border-gray-200 rounded-lg shadow-inner w-full h-auto bg-blue-100"
          />
          
          {!gameActive && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg">
              <Plane size={48} className="text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Paper Airplane Simulator
              </h3>
              <Button onClick={startGame} size="lg">
                Start Game
              </Button>
              <p className="text-white text-sm mt-4">
                Use arrow keys or touch to control the plane
              </p>
            </div>
          )}
          
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                Game Over
              </h3>
              <p className="text-xl text-white mb-4">
                Score: {score}
              </p>
              <Button onClick={resetGame} size="lg">
                Play Again
                <RotateCcw size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          {gameActive && !gameOver && (
            <Button 
              variant="outline" 
              onClick={togglePause}
            >
              {paused ? (
                <>
                  <Play size={16} className="mr-2" />
                  Resume
                </>
              ) : (
                <>
                  <Pause size={16} className="mr-2" />
                  Pause
                </>
              )}
            </Button>
          )}
          
          <Button 
            variant="outline" 
            onClick={resetGame}
          >
            <RotateCcw size={16} className="mr-2" />
            Reset
          </Button>
        </div>
        
        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>Controls:</p>
          <p>Arrow keys or WASD to move - Touch and drag on mobile</p>
          <p>Avoid clouds and don't fly too high or low!</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlightSimulator;
