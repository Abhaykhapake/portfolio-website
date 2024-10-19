import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  // In that case no need to using a routing 
  {path:'about',
    component:AboutComponent
  },
  {path:'contact',
    component:ContactComponent
  },
  {path:'',
    component:SliderComponent
  },
  {path:'skill',
    component:SkillComponent
  },
  {path:'work',
    component:WorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
