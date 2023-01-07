import { Field, Int, InputType } from '@nestjs/graphql'

// 사용자에게 입력받을 타입 지정

@InputType() // graphql
export class CreateStarbucksMenuInput {
  @Field(() => String) // graphql
  menu: string

  @Field(() => Int) // graphql
  price: number

  @Field(() => Int) // graphql
  kcal: number

  @Field(() => Int) // graphql
  saturated_fat: number

  @Field(() => Int) // graphql
  protein: number

  @Field(() => Int) // graphql
  salt: number

  @Field(() => Int) // graphql
  sugar: number

  @Field(() => Int) // graphql
  caffeine: number
}
