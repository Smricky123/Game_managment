import { Controller, Get, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Post, Put, UsePipes } from '@nestjs/common/decorators';
import { Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateUserDto } from '../DTOS/CreateUser.dtos';
//creating two routes name users and post

@Controller('users')
export class UsersController {
    //General get withiut route
    //Defining info for push
    @Get()
    getUsers(){
       return[
       {username:'Ricky' ,
       email:'@com'}];
    }

    @Get('post/comment')
    getUserPost(){
        return [
        {ID1:'Designer', 
        ID2:'Developer',
        comment: ['Alright'],},
    ];
    }

    //route for push request
    @Post('create')
    @UsePipes(new ValidationPipe)
    creatUser(@Body()userdata:CreateUserDto){
        console.log(userdata);
        return 'Created';

    }

    //route for get
    @Get(':id/:postId')
    getUserById(@Param('id') id : string, @Param('postId') postId : string){
         console.log(id);
         return{id,postId};
    }

    //route for query
    @Get()
    getUser(@Query('sortBy')sortBy: String){
      console.log(sortBy);  
    }

    //Update
    @Put(':id')
    updateUser(@Param('id') id:string){
        return {'Updated': id};
  }

  //Delete
  @Delete(':id')
  deleteUser(@Param('id') id:string) {
    return 'Deleted';

  }

}
