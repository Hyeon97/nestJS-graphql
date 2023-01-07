import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType() // graphql
export class Menu {
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
