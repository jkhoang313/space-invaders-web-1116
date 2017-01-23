class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }
  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Pilot") {
      return "had no effect"
    } else {
      this.currentShip.warpDrive = "engaged!"
    }
  }
  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Defender") {
      return "had no effect"
    } else {
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig" || this.position !== "Gunner") {
      return "had no effect"
    } else {
      this.currentShip.phasersCharge = "charged!"
    }
  }
}

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = "uncharged"
    for (let i = 0, l = crew.length; i < l; i++) {
      crew[i].currentShip = this
    }
  }

}
