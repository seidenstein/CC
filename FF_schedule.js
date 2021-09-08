const TEAMS = 12
const WEEKS = 14
const DIVISIONS = 3
const DIVTEAMS = 4
const TRIAL_LIMIT = 200;
var schedule = new  Array(TEAMS)
const TEAMNAMES = [
    'Ian',
    'Bryan',
    'Erika',
    'Tom',
    'Tucker',
    'Jeff',
    'Ace',
    'Seid',
    'Hubbs',
    'Chris',
    'Bret',
    'Little Marc'
]
 
function initSchedule(){
    //schedule = new Array(TEAMS);
    for (team = 0; team < TEAMS; team++){
        schedule[team] = new Array(WEEKS).fill(-1)
    }
    //console.log(schedule)
}


function getRandomTeam(){ 
    rand = Math.floor(Math.random() * TEAMS);
    return rand
}

class OpponentFinder {
    constructor(week) {
        this.week = week
        this.used = new Array()
        console.log('OpponentFinder instantiated for week %d', week);
    }
    setTeam(team){
        this.team = team;
    }
    get opponent(){
        let found = this.week
        let opp = -1;
        let count = 0
        while (found > -1 ){
            opp = getRandomTeam();
            console.log('Week %d, Team %d: getRandomTeam returned %d', this.week, this.team, opp);
            found = schedule[this.team].indexOf(opp);
            console.log('We found that team %d is already playing team %d in week %d', this.team, opp, found)
            found = opp == this.team ? this.team: found;
            if (found == -1){
                for (let t = 0; t < TEAMS ; t++){
                    console.log('OpponentFinder.opponent: team = %d; week = %d; opp = %d', t, this.week, schedule[t][this.week]);
                    if(schedule[t][this.week] == opp){
                        found = opp;
                    }
            
                }    
            }
            count++
            if(count > TRIAL_LIMIT){
                console.log('Too many tries!!!')
                opp = -1
                break;
            }

        }

        console.log('unused opponent found for team %d: %d', this.team, opp)
        //this.used.push(opp)
        return opp
    }
  }

  function setMatch(team, week, opp){
    schedule[team][week] = opp;
    schedule[opp][week] = team;
    console.log('setMatch:  ---   Week %d: Team %d plays Team %d', week, team, opp)
    //console.log(schedule)
  }

//   function MakeTeamSchedule(team){
//     let opponentFinder = new OpponentFinder(team)
//     let opp = -1
//     for(let week = 0; week<WEEKS; week++){
//         if(schedule[team][week] == -1){
//             opp = opponentFinder.opponent(week);
//             console.log('opp = %d', opp)
//             setMatch(team, week, opp)
            
//         }else{
//             console.log('Week %d: Team %d is already playing Team %d', week, team, schedule[team][week])
//         }
//     }
//   }

  function ResetWeek(week){
      for(team = 0; team < TEAMS; team++){
          schedule[team][week] = -1
        }
        console.log ('--------------------------------------RESETTING WEEK %d--------------------------------------------', week)

  }

  function MakeWeekSchedule(week, iter){
    console.log (' Running MakeWeekSchedule(%d) - iter: %d', week, iter)
    let opponentFinder = new OpponentFinder(week)
    let opp = -1
    for(let team = 0; team < TEAMS; team++){
        opponentFinder.setTeam(team)
        if(schedule[team][week] == -1){
            opp = opponentFinder.opponent;
            console.log('opp = %d', opp)
            if(opp == -1){
                ResetWeek(week)
                MakeWeekSchedule(week, iter+1)
            }else{
                setMatch(team, week, opp)
            }
            
            
        }else{
            console.log('Week %d: Team %d is already playing Team %d', week, team, schedule[team][week])
        }
    }
    // OutputSchedule();
  }


  function MakeDivisionalWeeks(){
      for(let div = 0; div < DIVISIONS; div++){
        startingTeam = DIVTEAMS*div;
        console.log(startingTeam);
        setMatch(startingTeam, 0, startingTeam+1);
        setMatch(startingTeam, 1, startingTeam+2);
        setMatch(startingTeam, 2, startingTeam+3);
        setMatch(startingTeam + 1, 1, startingTeam + 3);
        setMatch(startingTeam + 1, 2, startingTeam + 2);
        setMatch(startingTeam + 2, 0, startingTeam + 3);

        setMatch(startingTeam, 12, startingTeam+1);
        setMatch(startingTeam, 13, startingTeam+2);
        setMatch(startingTeam, 11, startingTeam+3);
        setMatch(startingTeam + 1, 13, startingTeam + 3);
        setMatch(startingTeam + 1, 11, startingTeam + 2);
        setMatch(startingTeam + 2, 12, startingTeam + 3);
        
    }
    console.log('MakeDivisionalWeeks has completed');
}

function OutputSchedule(){

    console.log('\n-----------FULL SCHEDULE-----------')
    for (let week = 0; week<WEEKS; week++){
        console.log('WEEK %d: ', week + 1);
        for (let team = 0; team<TEAMS; team++){
            console.log('%s plays %s', TEAMNAMES[team], TEAMNAMES[schedule[team][week]]);
        }
    }
}

function main(){
   let arr = new Array(12).fill(0)
   initSchedule();
    // for (let i = 0; i <10000000; i++){
    //     arr[getRandomTeam(4)]++
    // }
    // console.log(arr);   
    //console.log(schedule)
    MakeDivisionalWeeks();
    for (let week = 3; week < WEEKS - 3; week ++){
        MakeWeekSchedule(week, 0)
    }
    // for (let team = 0; team < TEAMS; team ++){
    //     MakeTeamSchedule(team)
    // }
    // console.log(schedule)

    OutputSchedule();

}


main();