export interface IBaseEntityProps {
  created_at: Date;
  created_by: string;
  last_updated: Date;
  last_updated_by: string;
  is_deleted: boolean;
}

export class BaseEntity {
  created_at: Date;
  created_by: string;
  last_updated: Date;
  last_updated_by: string;
  is_deleted: boolean;

  constructor({ created_at, created_by, last_updated, last_updated_by, is_deleted }: IBaseEntityProps) {
    this.created_at = created_at;
    this.created_by = created_by;
    this.last_updated = last_updated;
    this.last_updated_by = last_updated_by;
    this.is_deleted = is_deleted;
  }
}
