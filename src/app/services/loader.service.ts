import { LoaderServiceContract } from './loader-service.contract';
import { BehaviorSubject, Observable } from 'rxjs';

export class LoaderService implements LoaderServiceContract {
    loading: BehaviorSubject<boolean>;

    constructor() {
        this.loading = new BehaviorSubject<boolean>(false);
    }

    isLoading(): Observable<boolean> {
        return this.loading.asObservable();
    }

    setLoading(loadState: boolean): void {
        if (loadState === false) {
            setTimeout(() => {
                this.loading.next(loadState);
            }, 300);
        } else {
            this.loading.next(loadState);
        }
    }
}
