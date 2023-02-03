import { Controller, Get, ParseBoolPipe, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Post, Put, UsePipes } from '@nestjs/common/decorators';
import { Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { ParseFilePipe, ParseFloatPipe } from '@nestjs/common/pipes';
import { CreateUserDto, LoginUserDto } from '../DTOS/CreateUser.dtos';


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

    @Get('post')
    getUserPost(){
        return [
        {ID1:'Designer', 
        ID2:'Developer',
        comment: 'Alright',},
    ];
    }

    //route for push request
    @Post('create')
    @UsePipes(new ValidationPipe)
    creatUser(@Body()userdata:CreateUserDto){
        console.log(userdata);
        return 'Created';

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

  @Get('view')
    getUserId(){
        return [
        {ID1:'001', 
        ID2:'030',
        comment: 'Alright',},
    ];
    }

    //route for push request
    @Post('login')
    @UsePipes(new ValidationPipe)
    LogUser(@Body()userdata:LoginUserDto){
        console.log(userdata);
        return 'Successful';

    }

    //route for get
    @Get(':name')
    getUserByname(@Param('id') name : string){
         console.log(name);
         return{name};
    }

    
    //Update
    @Put(':response')
    updateresp(@Param('id',ParseBoolPipe) response:boolean){
        return {'Updated': response};
  }

  //Delete
  @Delete(':percent')
  deletepercent(@Param('id',ParseFloatPipe) percent:number) {
    return 'Deleted percent';

  }

}

