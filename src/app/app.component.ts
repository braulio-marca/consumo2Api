import { Component } from '@angular/core';
import { PersonaService } from './Servicios/persona.service';
import { StandsService } from './Servicios/stands.service';
// import { GoogletranslateService } from './Servicios/googletranslate.service';
// import { SolutionService } from './Servicios/solution.service';
// import { GoogleObj, Solution } from './models/solution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Personjaes y Stands de Jojo';
  enlace:string="https://jojos-bizarre-api.netlify.app/assets/"
  imagenStand:string=""
  public personas:Array<any> = [];
  public stands:Array<any> = [];
  // public traduccion:Array<any> = [];
  constructor( 
    private personaService:PersonaService,
    private standService:StandsService,
    // private solution: SolutionService,
    // private google: GoogletranslateService
  ) {
      this.personaService.getPersona().subscribe((data:any)=>{ //importante cambiar data a any porque viene de un json osea es un objeto y quermos guardalo en un arreglo
        // console.log(data);
        this.personas=data;
      });
      this.standService.getStand().subscribe((data:any)=>{ //importante cambiar data a any porque viene de un json osea es un objeto y quermos guardalo en un arreglo
        // console.log(data);
        this.stands=data;
      });

      // this.solution.getSolution().subscribe((res:any) => this.traduccion = res);
   }
   convertir(palabra:string):string{
      let conversion:string="";
      conversion=palabra.split(" ")[0]
      conversion=this.enlace+conversion.toLowerCase()+"/";
      return conversion;
   }
   buscarStand(id:string):string{
      this.imagenStand="";
      for(let i of this.stands){
        if(i.standUser==id){
          this.imagenStand=this.enlace+i.image;
          
          return i.name;
        }
        
      }
      
      this.imagenStand="https://cdn.shopify.com/s/files/1/0039/1384/2788/collections/image_e2dd7acf-25d1-4bf7-9e96-80ce4842fe33.jpg?v=1595186449"
      return "No tiene stand";
   }
   Organizar(conjunto:string):string[]{
    let array=conjunto.split(",");
    return array;
   }
   verificar(condicion:boolean):string{
      if(condicion){
        return "Si";
      }
      else{
        return "No";
      }
   }

  //  send(traduccion: string) {
  //   const googleObj: GoogleObj = {
  //     q: [this.traduccion[0]],
  //     target: "en"
  //   };
  //   this.google.translate(googleObj).subscribe(
  //     (res: any) => {
  //       console.log(res.traduccion.translations[0].translatedText); 
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  //  }
 

}
