export interface Job {
  id: number;
  companyId: number;
  description: string;
  positionId: number;
}

export interface Company {
  id: number;
  name: string;
}

export interface Position {
  id: number;
  name: string;
}
