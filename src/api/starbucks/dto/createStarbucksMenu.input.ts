import { Field, Int, InputType } from '@nestjs/graphql'

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
