import React from 'react'
import Image from "next/image";

export default function 
() {
  return (
    <div>
        <Image
                        className="dark:invert"
                        src="/LAP.png"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
    </div>
  )
}
