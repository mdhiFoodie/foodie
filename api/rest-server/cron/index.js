const CronJob = require('cron').CronJob;

//CHARGES 
const job = new CronJob({cronTime: '00 15 10 * * 0-6', onTick: () => {
  /*
   * Runs every weekday
   * at 10:15:00 AM.
   */
  },
  start: true, //Starts the job now 
  timeZone: 'America/LosAngeles' 
});
job.start(); 
