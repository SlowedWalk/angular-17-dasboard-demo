import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { debounceTime, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,NgIcon],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _appService: AppService,
  ) { }

  @Input()
  placeholder: string = 'Search...';

  params: string = "";

  searchParams = new URLSearchParams(this.params);

  searchForm = this._formBuilder.group({
    term: ['', Validators.required]
  });

  magnifyingGlassIcon = heroMagnifyingGlass;

  // search(term: string) {
  //   debounce(() => {
  //     console.log('Searching for: ', term);
  //   }, 1000);
  // }

  search: Signal<Partial<{ term: string | null }>> = toSignal(

    this.searchForm.valueChanges.pipe(
      debounceTime(300),
      tap((term) => (
        console.log(`Searching... ${term}`),
        this._appService.search(term.term)
      ))
    ),
    { initialValue: { term: null } }
  );
}
