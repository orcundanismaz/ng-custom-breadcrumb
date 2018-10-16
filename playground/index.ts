import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BreadcrumbModule } from '../src/index';


@Component({
    selector: 'app',
    template: '<breadcrumb-component [breadcrumbModel]="breadcrumbModel"></breadcrumb-component>'
})
class AppComponent {

    breadcrumbModel = {
        model: [
            { label: 'Categories', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
            { label: 'Sports', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
            { label: 'Football', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
            { label: 'Countries', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
            { label: 'Squad', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi', icon: 'pi pi-external-link' }
        ],
        style: { fontSize: "17px", bgColor: "#535377", passiveTextColor: "rgb(184, 194, 230)", activeTextColor: "white", fontFamily: "monospace" }
    };


    constructor() {

    }
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule, BreadcrumbModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
