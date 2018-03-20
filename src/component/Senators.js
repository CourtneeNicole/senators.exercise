import React, {Component} from 'react'
import { allSenators, allDemocrats, allIndependents, allRepublicans, allFemale, allMale, allUtah } from '../filters'
import Senator from './Senator'

export default class extends Component{
  renderSenators(){
    return allSenators().map(senator => <Senator senator={senator}/>)
  }
  renderRepublicans(){
    return allRepublicans().map(senator => <Senator senator={senator}/>)
  }
  renderDemocrats(){
    return allDemocrats().map(senator => <Senator senator={senator}/>)
  }
  renderIndependents(){
    return allIndependents().map(senator => <Senator senator={senator}/>)
  }
  renderMales(){
    return allMale().map(senator => <Senator senator={senator}/>)
  }
  renderFemales(){
    return allFemale().map(senator => <Senator senator={senator}/>)
  }
  renderUtah(){
    return allUtah().map(senator => <Senator senator={senator}/>)
  }

  render(){
    const senators = this.renderSenators()
    const repubs = this.renderRepublicans()
    const dems = this.renderDemocrats()
    const inds = this.renderIndependents()
    const utah = this.renderUtah()
    // const fems = this.renderFemales()
    // const males = this.renderMales()
    return(
      <div>
        <h1>Republicans</h1>
        {repubs}
        <h1>Democrats</h1>
        {dems}
        <h1>Independents</h1>
        {inds}
        <h1>Utah Senators</h1>
    {utah}
        {/*<h1>Males</h1>*/}
        {/*{males}*/}
        {/*<h1>Females</h1>*/}
        {/*{fems}*/}
        </div>
    )
  }
}
