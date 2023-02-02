import { Controller, Get } from '@nestjs/common';
import { Body, Post, Req, Res } from '@nestjs/common/decorators';
import { Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { Request, Response } from 'express';
import { CreateUserDto } from '../DTOS/CreateUser.dtos';
//creating two routes name users and post

@Controller('users')
export class UsersController {
    //General get withiut route
    @Get()
    getUsers(){
       return[
       {username:'Ricky' ,
       Gmail:'@com'}];
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
    creatUser(@Body()userdata:CreateUserDto){
        console.log(userdata);
        return{};

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
    
    @Put(':id')
  updateUser(@Param('id') id, @Body() updateData) {
    // implement your update logic here
    return { id, updateData };
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUser(@Param('id') id) {
    // implement your delete logic here

}
