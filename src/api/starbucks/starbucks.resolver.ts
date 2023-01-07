import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { StarbucksService } from './starbucks.service'
import { CreateStarbucksMenuInput } from './dto/createStarbucksMenu.input'
import { Menu } from './entities/menu.entity'

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Menu])
  fetchBoards() {
    return ''
  }

  @Mutation(() => String) // 해당 함수의 return type === string
  createStarbucksMenu(
    @Args('createStarbucksMenuInput')
    createStarbucksMenuInput: CreateStarbucksMenuInput,
  ) {
    return this.starbucksService.create(createStarbucksMenuInput.menu)
  }
}
