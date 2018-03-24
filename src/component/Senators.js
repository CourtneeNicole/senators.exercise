import React from 'react'
import {allDemocrats, allIndependents, allRepublicans, allFemale, allMale, allUtah } from '../filters'
import Senator from './Senator'

export default class extends React.Component{
  renderRepublicans(){
    return allRepublicans().map(senator => <Senator senator={senator}/>)
  }
  renderDemocrats(){
    return allDemocrats().map(senator => <Senator senator={senator}/>)
  }
  renderIndependents(){
    return allIndependents().map(senator => <Senator senator={senator}/>)
  }
  // renderMales(){
  //   return allMale().map(senator => <Senator senator={senator}/>)
  // }
  // renderFemales(){
  //   return allFemale().map(senator => <Senator senator={senator}/>)
  // }
  renderUtah(){
    return allUtah().map(senator => <Senator senator={senator}/>)
  }

  render(){
    const repubs = this.renderRepublicans()
    const dems = this.renderDemocrats()
    const inds = this.renderIndependents()
    const utah = this.renderUtah()

    return(
        <div className="sentator">
          <div className="republicans">
            <h2>Republicans</h2>
            {repubs}
          </div>
          <div className="democrats">
            <h2>Democrats</h2>
         {dems}
          </div>
          <div className="independants">
          <h2>Independents</h2>
         {inds}
          </div>
        </div>
    )
  }
}
