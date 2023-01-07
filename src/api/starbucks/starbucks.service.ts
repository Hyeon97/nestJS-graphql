import { Injectable } from '@nestjs/common'

@Injectable()
export class StarbucksService {
  create(name) {
    return `메뉴 : ${name} 추가 성공`
  }
}
