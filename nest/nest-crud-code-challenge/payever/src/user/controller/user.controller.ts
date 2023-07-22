import { Controller, Get, Post, Delete, Param, Req,  UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from '../service/users.service';
import { CreateUserDto } from '../service/dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createUser(
    @Req() userData: CreateUserDto,
    @UploadedFile() avatar: Express.Multer.File,
  ) {
    this.userService.createUser(userData, avatar);
  }

  @Get(':userId')
  async getUser(@Param('userId') userId: string) {
    // Retrieve data from https://reqres.in/api/users/{userId}
    // Return the user in JSON representation
    return {
      name: 'omid',
      id: userId,
    };
  }

  @Get(':userId/avatar')
  async getUserAvatar(@Param('userId') userId: string) {
    // Retrieve the avatar image by 'avatar' URL
    // On first request, save the image as a plain file and store it in MongoDB
    // Return the base64-encoded representation of the image
    // On subsequent requests, retrieve the saved file from the database and return it as base64-encoded
  }

  @Delete(':userId/avatar')
  async deleteUserAvatar(@Param('userId') userId: string) {
    // Remove the avatar file from the file system storage
    // Delete the corresponding entry from the database
  }
}
