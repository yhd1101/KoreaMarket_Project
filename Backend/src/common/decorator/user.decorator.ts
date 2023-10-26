// custom.decorators.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@users/entities/user.entity';
import {RequestWithUserInterface} from "@auth/interfaces/requestWithUser.interface"; // 사용자 엔티티 import

export const CustomUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest<RequestWithUserInterface>();
        return request.user as User;
    },
);
