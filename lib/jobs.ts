import fs from 'fs';
import path from 'path';
import type { Job } from './jobs.interfaces';

export const getJobs = async (): Promise<Job[] | undefined> => {
  try {
    const jobsData = path.resolve('data.json');
    const jobs = fs.readFileSync(jobsData, { encoding: 'utf-8'});
    return JSON.parse(jobs) as Array<Job>;
  } catch (error) {
    Promise.reject('Ha ocurrido un error, vuelve a intentarlo');
  }
};
