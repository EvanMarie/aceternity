interface CSSAnimationExampleProps {
  bg?: string;
  animation?: string;
  duration?: string;
  delay?: string;
  iterationCount?: string;
  direction?: string;
  timingFunction?: string;
  fillMode?: string;
  playState?: string;
  display?: string;
}

export default function CSSAnimationExample({
  bg = "bg-col-500",
  animation = "animate-bounce",
  duration = "duration-1s",
  delay = "delay-0s",
  iterationCount = "iteration-count-infinite",
  direction = "direction-normal",
  timingFunction = "timing-function-ease",
  fillMode = "fill-mode-none",
  playState = "play-state-running",
  display = "flex",
}: CSSAnimationExampleProps) {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex justify-center items-center h-[50vh] w-[50vh]">
        <div
          className={`h-[10vh] w-[10vh] ${bg} shadowBroadNormal border-970-md justify-center items-center ${animation} ${duration} ${delay} ${iterationCount} ${direction} ${timingFunction} ${fillMode} ${playState} ${display}`}
        >
          {animation.replace("animate-", "")}
        </div>
      </div>
    </div>
  );
}
