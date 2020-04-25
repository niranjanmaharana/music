import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoaderService {
    public loading: boolean = true;
    public text: string = 'Loading...';

    public mask(text: string) {
        this.loading = true;
        this.text = text;
    }

    public unmask() {
        this.loading = false;
        this.text = '';
    }
}