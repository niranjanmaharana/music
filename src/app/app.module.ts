import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { IgxCarouselModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppTooltipOptions } from './const/AppTooltipOptions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BodyComponent,
		FooterComponent,
		SidenavComponent,
		ContentComponent,
		CategoriesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		TooltipModule.forRoot(AppTooltipOptions as TooltipOptions),
		IgxCarouselModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
