import React from 'react'

export default class extends React.Component{
  render(){
    const senator = this.props.senator;
    return(
      <div className="sentator">
        <h3>
          {senator.person.name} -    {senator.senator_rank_label}
        </h3>
        <p>
          Term
        </p>
        <p>
          {senator.startdate} to {senator.enddate}
          </p>
      </div>
    );
  }
}
