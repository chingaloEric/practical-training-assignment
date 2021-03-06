import { HomeComponent } from './home/home.component';
import { OrganisationUnitDetailsComponent } from './organisation-unit-details/organisation-unit-details.component';
import { OrganisationUnitsComponent } from './organisation-units/organisation-units.component';
import { CompletenessComponent } from './completeness/completeness.component';
import { OrganisationUnitEditComponent } from './organisation-unit-edit/organisation-unit-edit.component';

export const pages: any[] = [
  HomeComponent,
  CompletenessComponent,
  OrganisationUnitEditComponent,
  OrganisationUnitDetailsComponent,
  OrganisationUnitsComponent
];

export * from './home/home.component';
