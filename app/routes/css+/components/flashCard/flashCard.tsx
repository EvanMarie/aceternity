import Box from "~/components/buildingBlocks/box";
import "./flashCard.css";

export default function FlashCard() {
  return (
    <div className="perspective-1000">
      <div className="card-inner relative">
        <div className="card-face card-front bg-red-400 flex items-center justify-center shadowBroadNormal">
          Front Content
        </div>
        <div className="card-face card-back bg-blue-400 flex items-center justify-center rotate-y-180">
          Back Content
        </div>
      </div>
    </div>
  );
}
