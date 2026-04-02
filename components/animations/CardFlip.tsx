"use client";

import { ReactNode } from "react";

type CardFlipProps = {
  front: ReactNode;
  back: ReactNode;
  hasCase?: boolean;
};

export default function CardFlip({
  front,
  back,
  hasCase = true,
}: CardFlipProps) {
  if (!hasCase) {
    // No flip, standard cursor — just render front
    return (
      <div className="relative w-full h-full">
        <div className="w-full h-full">{front}</div>
      </div>
    );
  }

  return (
    <div className="card-flip cursor-pointer w-full h-full">
      <div className="card-inner w-full h-full">
        <div className="card-front w-full h-full">{front}</div>
        <div className="card-back w-full h-full">{back}</div>
      </div>
    </div>
  );
}
