import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Image src="/assents/Logo.png" alt="Logo" width={100} height={100} />
    </div>
  );
}
