"use client";

import Link from "next/link";
import React, { useState, useEffect, useCallback, useRef } from "react";

// Configuration
const GRID_SIZE = 20;
const SPEEDS = {
  EASY: 150,
  MEDIUM: 100,
  HARD: 60,
};

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Position = { x: number; y: number };

export default function Game() {
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
    { x: 10, y: 12 },
  ]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>("UP");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(SPEEDS.MEDIUM);

  const directionRef = useRef<Direction>(direction);
  directionRef.current = direction;

  // Load High Score on Mount
  useEffect(() => {
    const saved = localStorage.getItem("neo_snake_highscore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Generate random food position not on snake body
  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const collides = currentSnake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y,
      );
      if (!collides) break;
    }
    return newFood;
  }, []);

  // Reset Game
  const resetGame = () => {
    const initialSnake = [
      { x: 10, y: 10 },
      { x: 10, y: 11 },
      { x: 10, y: 12 },
    ];
    setSnake(initialSnake);
    setDirection("UP");
    directionRef.current = "UP";
    setScore(0);
    setIsGameOver(false);
    setIsPaused(false);
    setFood(generateFood(initialSnake));
  };

  // Change direction safely (prevent 180° instant turns)
  const changeDirection = useCallback((newDir: Direction) => {
    const current = directionRef.current;
    if (newDir === "UP" && current !== "DOWN") setDirection("UP");
    if (newDir === "DOWN" && current !== "UP") setDirection("DOWN");
    if (newDir === "LEFT" && current !== "RIGHT") setDirection("LEFT");
    if (newDir === "RIGHT" && current !== "LEFT") setDirection("RIGHT");
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "KeyW"].includes(e.code)) changeDirection("UP");
      if (["ArrowDown", "KeyS"].includes(e.code)) changeDirection("DOWN");
      if (["ArrowLeft", "KeyA"].includes(e.code)) changeDirection("LEFT");
      if (["ArrowRight", "KeyD"].includes(e.code)) changeDirection("RIGHT");
      if (e.code === "Space") setIsPaused((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection]);

  // Game Loop
  useEffect(() => {
    if (isPaused || isGameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };

        switch (directionRef.current) {
          case "UP":
            head.y -= 1;
            break;
          case "DOWN":
            head.y += 1;
            break;
          case "LEFT":
            head.x -= 1;
            break;
          case "RIGHT":
            head.x += 1;
            break;
        }

        // Wall Collision Check
        if (
          head.x < 0 ||
          head.x >= GRID_SIZE ||
          head.y < 0 ||
          head.y >= GRID_SIZE
        ) {
          setIsGameOver(true);
          return prevSnake;
        }

        // Self Collision Check
        if (
          prevSnake.some(
            (segment) => segment.x === head.x && segment.y === head.y,
          )
        ) {
          setIsGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Food Eating Logic
        if (head.x === food.x && head.y === food.y) {
          const newScore = score + 10;
          setScore(newScore);
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem("neo_snake_highscore", newScore.toString());
          }
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Remove tail
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [isPaused, isGameOver, food, score, highScore, speed, generateFood]);

  return (
    <div className="min-h-screen bg-[#DECDFE] text-black font-mono flex flex-col items-center justify-center p-4 selection:bg-[#FF6B6B] selection:text-white">
      {/* Title Header */}
      <header className="mb-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight bg-[#F2E961] text-black px-8 sm:px-16 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-[-1deg] inline-block rounded-2xl">
          Snake.exe 🐍
        </h1>
      </header>

      {/* Main Game Container - Responsive 70%-80% Width */}
      <div className="w-[90vw] sm:w-[90vw] max-w-5xl bg-white border-4 border-black p-4 sm:p-6 shadow-[10px_10px_0px_0px_#000] rounded-3xl">
        {/* Scorebar */}
        <div className="grid grid-cols-2 gap-4 mb-2">
          <div className="bg-[#23A095] border-3 border-black p-2 sm:p-3 text-center font-bold shadow-[4px_4px_0px_0px_#000] rounded-xl">
            <span className="block text-xs sm:text-sm uppercase text-white">
              Score
            </span>
            <span className="text-2xl sm:text-3xl text-white">{score}</span>
          </div>
          <div className="bg-[#F2E961] border-3 border-black p-2 sm:p-3 text-center font-bold shadow-[4px_4px_0px_0px_#000] rounded-xl">
            <span className="block text-xs sm:text-sm uppercase text-black/70">
              Best
            </span>
            <span className="text-2xl sm:text-3xl">{highScore}</span>
          </div>
        </div>

        {/* Board Grid - Scaled to fit comfortably inside container */}
        <div className="relative aspect-square w-full max-h-[60vh] mx-auto bg-[#FAFAFA] rounded-xl border-4 border-black grid grid-cols-20 grid-rows-20 gap-0 shadow-[6px_6px_0px_0px_#000] overflow-hidden">
          {/* Render Snake */}
          {snake.map((segment, index) => {
            const isHead = index === 0;
            return (
              <div
                key={`${segment.x}-${segment.y}-${index}`}
                style={{
                  gridColumnStart: segment.x + 1,
                  gridRowStart: segment.y + 1,
                }}
                className={`w-full h-full border border-black/20 ${
                  isHead
                    ? "bg-[#FF6B6B] border-2 border-black z-10 rounded-xl"
                    : "bg-[#2ECC71] rounded-xl"
                }`}
              />
            );
          })}

          {/* Render Food */}
          <div
            style={{
              gridColumnStart: food.x + 1,
              gridRowStart: food.y + 1,
            }}
            className="w-full h-full bg-[#F2E961] border-2 border-black animate-pulse z-10 rounded-xl"
          />

          {/* Game Over Overlay */}
          {isGameOver && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center p-4 z-20 rounded-xl">
              <div className="bg-[#FF6B6B] border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_#000] rotate-1 rounded-xl">
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-black mb-2">
                  WASTED 💥
                </h2>
                <p className="font-bold text-base mb-4">Final Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="w-full rounded-xl bg-[#F2E961] text-black font-black uppercase py-2 px-6 border-3 border-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000] transition-all cursor-pointer"
                >
                  Play Again 🔄
                </button>
              </div>
            </div>
          )}

          {/* Pause Overlay */}
          {isPaused && !isGameOver && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-20 rounded-xl">
              <div className="bg-[#23A095] border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_#000] rounded-xl">
                <p className="text-2xl font-black uppercase text-white mb-3">
                  Game Paused
                </p>
                <button
                  onClick={() => setIsPaused(false)}
                  className="bg-[#F2E961] rounded-xl text-black font-bold uppercase px-6 py-3 border-3 border-black shadow-[4px_4px_0px_0px_#000] hover:bg-white active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
                >
                  Press Space or Click to Start 🚀
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Speed Controls & Pause Toggle */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <button className="text-xs sm:text-sm font-black uppercase px-4 py-1.5 bg-[#FF6B6B] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#9333EA] disabled:opacity-50 cursor-pointer rounded-xl">
            <Link href="/">Go to Home 😎</Link>
          </button>
          <div className="flex gap-2">
            {(["EASY", "MEDIUM", "HARD"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setSpeed(SPEEDS[mode])}
                className={`text-xs sm:text-sm font-bold uppercase px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer rounded-xl ${
                  speed === SPEEDS[mode]
                    ? "bg-[#F2E961] text-black"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsPaused((prev) => !prev)}
            disabled={isGameOver}
            className="text-xs sm:text-sm font-black uppercase px-4 py-1.5 bg-[#A855F7] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000] rounded-xl hover:bg-[#9333EA] disabled:opacity-50 cursor-pointer"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>

        {/* On-Screen Touch Controls (For Mobile) */}
        <div className="mt-6 flex flex-col items-center gap-2 sm:hidden rounded-xl">
          <button
            onClick={() => changeDirection("UP")}
            className="w-14 h-14 bg-[#F2E961]  rounded-xl border-3 border-black font-black text-xl shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            ▲
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => changeDirection("LEFT")}
              className="w-14 h-14 bg-[#F2E961] rounded-xl border-3 border-black font-black text-xl shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              ◀
            </button>
            <button
              onClick={() => changeDirection("DOWN")}
              className="w-14 h-14 bg-[#F2E961] rounded-xl border-3 border-black font-black text-xl shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              ▼
            </button>
            <button
              onClick={() => changeDirection("RIGHT")}
              className="w-14 h-14 bg-[#F2E961] rounded-xl border-3 border-black font-black text-xl shadow-[3px_3px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
