import { Pipe } from '@angular/core';

import { Menu } from '../objects/Menu';

@Pipe({ name: 'menuFilter' })
export class MenuPipes{
  transform(value, args) {
  	if (value){
	  	let cat = args; 
	  	if (cat == ''){
	  		return value;
	  	} else{
		    return value.filter(menu => {
		    	return (menu.category === cat);
		    });	  		
	  	}

  	}
  }
}