import { Injectable } from '@nestjs/common'

@Injectable()
export class StarbucksService {
  findAll() {
    const list = [
      {
        menu: '카페모카',
        price: 1000,
        kcal: 100,
        saturated_fat: 100,
        protein: 100,
        salt: 100,
        sugar: 100,
        caffeine: 100,
      },
    ]
    return list
  }

  create(name) {
    return `메뉴 : ${name} 추가 성공`
  }
}
