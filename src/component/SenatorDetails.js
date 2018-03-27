import React from 'react'

export default class extends React.Component{
  render(){
    const senator = this.props.senator;
    return(
      <div className="senator">
        <h2>Details</h2>
        <h4>
          {senator.person.name} -    {senator.senator_rank_label}
          <br/>
        </h4>
        <h4>
          <a href={senator.person.link}>Senator Profile</a>
        <br/>
         Phone: {senator.phone}
          <br/>
         Address: {senator.extra.address}
          <br/>
            <a href={senator.extra.contact_form}>Contact Form</a>
            <br/>
          Twitter: {senator.twitterid}
          <br/>
          youtube: {senator.youtubeid}
        </h4>
      </div>
    );
  }
}