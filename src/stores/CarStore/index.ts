import { ICar } from "../../entities/ICar";
import { action, makeAutoObservable, runInAction } from "mobx"
import { getCars } from "../../api";

class CarStore {
  private cars: ICar[] = []

  constructor() {
    makeAutoObservable(this)
  }

  getCarById(id: string) {
    return this.cars.find((car) => {id = car.id})
  }

  @action
  async loadCars() {
    await getCars().then((res) => this.resolver(res))
  }

  private resolver = (cars: ICar[]) => {
    runInAction(() => {
      this.cars = cars
    })
  }
}

export const carStore = new CarStore()