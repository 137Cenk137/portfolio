// Here's a breakdown of the Tailwind CSS classes used in the Loader component, explained as if you were running commands in the terminal:

// 1. flex
//    -> display: flex;            # enables flexbox layout
// 2. justify-center
//    -> justify-content: center;  # centers items horizontally in the flex container
// 3. items-center
//    -> align-items: center;      # centers items vertically in the flex container
// 4. h-screen
//    -> height: 100vh;            # sets the height to 100% of the viewport height
// 5. w-20
//    -> width: 5rem;              # sets the width to 5 rem (based on the Tailwind spacing scale)
// 6. h-20
//    -> height: 5rem;             # sets the height to 5 rem
// 7. border-2
//    -> border-width: 2px;        # sets border thickness to 2px on all sides
// 8. border-opacity-20
//    -> border-color's opacity: 0.2;  # 20% opacity for the border color
// 9. border-blue-500
//    -> border-color: #3B82F6;    # uses blue at the 500 step (default Tailwind palette)
// 10. border-t-blue-500
//    -> border-top-color: #3B82F6;   # top border color specifically set to the same blue as above
// 11. rounded-full
//    -> border-radius: 9999px;    # fully rounded, makes a circle
// 12. animate-spin
//    -> animation: spin 1s linear infinite; # applies a spinning animation

// This means the outer <div> makes a flex container centered both ways filling the screen, and the inner <div> is a blue, partially opaque, full-circle border spinning as a loader.

// Here is the original Loader component:
import React from 'react'
import { Html } from '@react-three/drei'

export default function Loader() {
  return (
    <Html>
    <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
    </Html>
  )
}
