import { Controller } from '@nestjs/common';
import { SecService } from './sec.service';

@Controller('sec')
export class SecController {
  constructor(private readonly SecService: SecService) {}
}
