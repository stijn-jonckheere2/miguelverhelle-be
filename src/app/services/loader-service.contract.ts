import { Observable } from 'rxjs';

export abstract class LoaderServiceContract {
    abstract isLoading(): Observable<boolean>;
    abstract setLoading(loadState: boolean): void;
}
