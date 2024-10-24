import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./app/header/header.component";
import { UserInputComponent } from "./app/user-input/user-input.component";
import { InvestmentResultsComponent } from "./app/investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./app/user-input/user-input.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
    imports: [UserInputModule,BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {]}