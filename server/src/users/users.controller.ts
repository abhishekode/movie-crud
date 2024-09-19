import {
  Controller,
  Post,
  Body,
  UsePipes,
  Put,
  UseGuards,
  Request,
  Get,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import {
  ChangeForgotPasswordDto,
  ChangePasswordDto,
  LoginUserDto,
  ResendOtpDto,
  UpdateUserDto,
  VerifyEmailOtpDto,
  CreateUserDto,
} from "./dto/create-user.dto";
import { JoiValidationPipe } from "src/middleware/validation.pipe";
import {
  verifyOtpSchema,
  loginSchema,
  otpValidatorSchema,
  changePasswordSchema,
  updateUserAccountDetailsSchema,
  changeForgotPasswordSchema,
  registrationSchema,
} from "./dto/joi-schema.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Roles } from "src/auth/roles.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import {
  BadRequestResponse,
  NotFoundResponse,
  SuccessResponse,
} from "src/constants/common.swagger";
import {
  UserLoginSuccessResponse,
  OtpSuccessSendResponse,
  OtpSuccessVerifyResponse,
  ChangedPasswordApiResponse,
  IUserResponse,
} from "./dto/user.swaggerResponse";
import { UserRole } from "src/constants/common.interface";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("users")
@ApiTags("Users")
@ApiResponse({
  status: 404,
  description: "Not Found",
  type: NotFoundResponse,
})
@ApiResponse({
  status: 400,
  description: "Bad Request",
  type: BadRequestResponse,
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("register")
  @ApiResponse({ status: 200, type: OtpSuccessSendResponse })
  @UsePipes(new JoiValidationPipe(registrationSchema))
  create(@Body() requestData: CreateUserDto) {
    return this.usersService.createNewUser(requestData);
  }

  @Post("login")
  @ApiResponse({ status: 200, type: UserLoginSuccessResponse })
  @UsePipes(new JoiValidationPipe(loginSchema))
  login(@Body() requestData: LoginUserDto) {
    return this.usersService.login(requestData);
  }

  @Put("account")
  @ApiResponse({ status: 200, type: SuccessResponse })
  @ApiBearerAuth()
  @Roles(UserRole.Admin, UserRole.Client)
  @UseGuards(AuthGuard, RolesGuard)
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor("profileImg"))
  async updateUserAccountDetails(
    @Body(new JoiValidationPipe(updateUserAccountDetailsSchema))
    requestData: UpdateUserDto,
    @Request() req,
    @UploadedFile() file: Express.Multer.File
  ) {
    const email = req.user.email;

    return this.usersService.updateUserAccountDetails(email, requestData, file);
  }

  @Get("profile")
  @ApiBearerAuth()
  @ApiResponse({ status: 200, type: IUserResponse })
  @Roles(UserRole.Admin, UserRole.Client)
  @UseGuards(AuthGuard, RolesGuard)
  async getUserProfile(@Request() req) {
    const email = req.user.email;
    return this.usersService.getUserProfile(email);
  }
}
