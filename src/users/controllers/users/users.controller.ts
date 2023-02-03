import { Controller, Get, ParseBoolPipe, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Post, Put, UsePipes } from '@nestjs/common/decorators';
import { Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateUserDto} from '../DTOS/CreateUser.dtos';

//creating two routes name users and post

@Controller('users')
export class UsersController {
    //route for query
    @Get()
    getUser(@Query('limit',ParseIntPipe)limit: number){      
      return {'Limit' : limit};
    }

    //General get without root
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
    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id : number){
         console.log(id);
         return{id};
    }

    
    //Update
    @Put(':id')
    updateUser(@Param('id',ParseIntPipe) id:number){
        return {'Updated': id};
  }

  //Delete
  @Delete(':id')
  deleteUser(@Param('id',ParseIntPipe) id:number) {
    return 'Deleted';

  }

}
