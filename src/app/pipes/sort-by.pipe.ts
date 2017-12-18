import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //marking the class
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
             //sortby is angular pipe which attaches some meta data.
        //wen we create a pipe, we need to create a class called pipetransform which says that needs to have transform() within the pipe which is responsible to do the pipe job.
        //in our case the pipe is meant to sort the values and logic is going to be in transform().

  transform(array: Array<any>, args?):  {
    //lets check to see if we have an array.
    //we dont want this transform to run if there is no data that comes into it. for that
    
    if(array){
      let sortField = args[0];
      array.sort((a:any, b:any) => {
                //compare function, needs 2 parameters with type any which represents 2 elements in an array.
       
      //CONDITION: compare function has 2 return 1 of 3 numbers
          //return 1      i.e., a>b
          //return -1      i.e., a<b
          //return 0      i.e., a=b
        if (a[sortField] < b[sortField]) {
          return -1 * modifier;
        } else if (a[sortField] > b[sortField]) {
          return 1 * modifier;
        } else {
          return 0;
        }
      });

    return array;
    }

    
  }

}
