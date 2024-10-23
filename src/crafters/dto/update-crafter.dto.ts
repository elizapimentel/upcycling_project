import { PartialType } from '@nestjs/mapped-types';
import { CreateCrafterDto } from './create-crafter.dto';

export class UpdateCrafterDto extends PartialType(CreateCrafterDto) {}
