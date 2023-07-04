const mapping: Record<string, string> = {
  companies: 'company',
  customers: 'customer',
  employees: 'employee',
  'performance-evaluations': 'performance_evaluation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
