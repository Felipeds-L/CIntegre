import { School } from '../school/schoolDto';
import { Status } from '@prisma/client';
import { ActivityDTO } from '../activity/activityDto';

type SchoolActivityStatus = Status;

export interface SchoolActivityDTO {
  id: number;
  status: SchoolActivityStatus;
  pontuation: number; // ong avalia
  activity_id: number;
  activity: ActivityDTO;
  school_id: number;
  school: School;
}

export interface SchoolActivityCreateDTO {
  school_id: number;
  activity_id: number;
  status: SchoolActivityStatus;
  pontuation: number; // ong avalia
}
