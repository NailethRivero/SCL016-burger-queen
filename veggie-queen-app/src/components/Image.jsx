import React from "react"

import { ReactComponent as Kitchen }
  from "../images/Kitchen.svg"
import { ReactComponent as Waiter }
  from "../images/Waiter.svg"
import { ReactComponent as Logo }
  from "../images/VQ.svg"

const ImageProject = ({ nombre }) => {
  switch (nombre) {
    case "kitchen":
      return <Kitchen />
    case "waiter":
      return <Waiter />
    case "logo":
      return <Logo />
    default: break
  }
}

export default ImageProject;