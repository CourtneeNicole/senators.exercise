import senators from '../data/senators'
import Search from '../component/Search'

export const allSenators = () => {
  return (senators)
}

export const byParty = (party = '') => {
return allSenators().filter(senator => senator.party === party)
}

export const allRepublicans = () => {
  return byParty('Republican')
}
export const allDemocrats = () => {
  return byParty('Democrat')
}

export const allIndependents = () => {
  return byParty('Independent')
}

export const byGender = (gender = '') => {
  return allSenators().filter(senator => senator.person.gender === gender)
}

export const allFemale = () => {
  return byGender('female')
}

export const allMale = () => {
  return byGender('male')
}
export const byState = (state) => {
  return allSenators().filter(senator =>senator.state === state)
}
export const allUtah = () => {
  return byState('UT')
}

export const findSenator = senator => allSenators()
  .filter(s => s.person.cspanid === senator.person.cspanid)
  .reduce((prev, current) => current)