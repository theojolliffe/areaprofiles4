import { readable } from 'svelte/store';

export const metadata = readable({
  'ethnicity': {
		codes: ['white', 'asian', 'black', 'mixed', 'other'],
		labels: ['White', 'Asian', 'Black', 'Mixed', 'Other']
  },
  'age': {
		codes: ['a015', 'a1664', 'a65plus'],
		labels: ['0-15', '16-64', '65+']
  },
  'tenure': {
		codes: ['owned', 'sharedown', 'rentsocial', 'rentprivate', 'other'],
		labels: ['Owned', 'Shared', 'Rented(soc)', 'Rented(pri)', 'Other']
  },
  'economic': {
		codes: ['employed', 'unemployed', 'student', 'carer', 'retired', 'inactive'],
		labels: ['Employed', 'Unemployed', 'Student', 'Carer', 'Retired', 'Inactive']
  },
});
