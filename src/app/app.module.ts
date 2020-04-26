import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MomentModule } from 'angular2-moment';
import { NgxPaginationModule } from 'ngx-pagination';

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
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { LyricComponent } from './lyric/lyric.component';
import { AboutComponent } from './about/about.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoaderComponent } from './loader/loader.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		BodyComponent,
		FooterComponent,
		SidenavComponent,
		ContentComponent,
		CategoriesComponent,
		ErrorComponent,
		HomeComponent,
		ContactComponent,
		BannerComponent,
		LyricComponent,
		AboutComponent,
		ControlMessagesComponent,
		LoginComponent,
		AdminHomeComponent,
		ResetPasswordComponent,
		LoaderComponent,
		PropertiesComponent
	],
	exports: [LoaderComponent],
	imports: [
		NgIdleKeepaliveModule.forRoot(),
		MomentModule,
		NgxPaginationModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		TooltipModule.forRoot(AppTooltipOptions as TooltipOptions),
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 5000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

}