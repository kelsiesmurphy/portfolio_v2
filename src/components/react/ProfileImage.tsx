import { useState } from "react";

export default function ProfileImage() {
  const [toggleDisguise, setToggleDisguise] = useState(false);
  return (
    <div
      className="relative not-prose w-40"
      onClick={() => setToggleDisguise(!toggleDisguise)}
    >
      <img
        src="/about/kelsie-murphy.jpg"
        className="relative aspect-square object-cover w-40 rounded-full"
      />
      {toggleDisguise && (
        <img src="/about/disguise.svg" className="absolute top-0 w-40" />
      )}
    </div>
  );
}
