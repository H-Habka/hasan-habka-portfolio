import { docwiseDetails } from "./dockwise"
import { dryDockDetails } from "./dryDock"
import { fastBoatDetails } from "./fastBoat"
import { militaryVesselDetails } from "./MilitaryVessel"

export const projectsData = {
  [docwiseDetails.name]: docwiseDetails,
  [dryDockDetails.name]: dryDockDetails,
  [fastBoatDetails.name]: fastBoatDetails,
  [militaryVesselDetails.name]: militaryVesselDetails,
}

export const projectsDataAsArray = Object.values(projectsData)
