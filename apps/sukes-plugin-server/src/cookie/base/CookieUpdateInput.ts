/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { AppModelWhereUniqueInput } from "../../appModel/base/AppModelWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CookieUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  data?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => AppModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppModelWhereUniqueInput)
  @IsOptional()
  @Field(() => AppModelWhereUniqueInput, {
    nullable: true,
  })
  appField?: AppModelWhereUniqueInput | null;
}

export { CookieUpdateInput as CookieUpdateInput };
