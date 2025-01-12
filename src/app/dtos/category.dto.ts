import { IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator';

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}
export class CreateCategoryDto implements ICreateCategoryDto{
    
    @IsNotEmpty()
    @Length(4,10)
    name!: string;

    @IsUrl()
    @IsNotEmpty()
    image!: string;

    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async () => {

    try {
        const dto = new CreateCategoryDto();
        dto.name = 'awwwwwww';
        dto.image = 'https://i.pinimg.com/originals/26/15/32/261532160de8dd3c2846abd445b25d0e.jpg';
        await validateOrReject(dto);
    } catch(error){
        console.log(error)
    }

})();