import { School } from '../school/schoolDto';
import { Causes } from '../causes/causesDto';
import { Status } from '@prisma/client';
import SocialActionService from '../socialAction/socialActionService';

type SchoolActionStatus = Status;

export interface SchoolAction {
  id: number;
  status: SchoolActionStatus;
  pontuation: number; // ong avalia
  activityId: number;
  activity: SocialActionService;
  school_id: number;
  school: School;
}

export interface SchoolActionCreateDTO {
  school_id: number;
  causes_id: number;
  status: SchoolActionStatus;
  registers: string;
  pontuation: number; // ong avalia
}
