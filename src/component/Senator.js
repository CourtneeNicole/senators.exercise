import React, {Component} from 'react'

export default class extends Component{
  render(){
    const senator = this.props.senator;
    return(
      <div>
        <h3>
          {senator.person.name} -    {senator.senator_rank_label}
        </h3>
        <h4>
          {senator.startdate}
        </h4>
        <h4>
          {senator.enddate}
        </h4>
      </div>
    );
  }
}
